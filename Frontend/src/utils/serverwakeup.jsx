// frontend/src/utils/serverwakeup.jsx

// --- Configuration ---
const URLS_TO_WAKE_UP = [
  // 1. This points to your Node/Docker Backend
  { name: "Backend API", url: import.meta.env.VITE_API_BASE_URL }, 
  
  // 2. This points to your FastAPI Model Server
  { name: "Model API", url: import.meta.env.VITE_API_API_URL }
];

const MAX_RETRIES = 12;      
const RETRY_INTERVAL = 5000; 

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function wakeServer(server, onStatusChange) {
  const { name, url } = server;
  onStatusChange(name, 'waking');
  console.log(`☕ Waking up ${name} at ${url}...`);

  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); 

      // We fetch the URL. If we get ANY response, the server is awake.
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      onStatusChange(name, 'ready');
      console.log(`✅ Success! ${name} is awake.`);
      return;

    } catch (error) {
      const attempt = i + 1;
      console.log(`   ... ${name} still sleeping...`);
      await sleep(RETRY_INTERVAL);
    }
  }

  onStatusChange(name, 'failed');
  console.log(`❌ Error: ${name} did not wake up.`);
}

export function startWakeUpSequence(onStatusChange) {
  console.log("--- Starting Server Wake-Up Sequence ---");
  Promise.all(URLS_TO_WAKE_UP.map(server => wakeServer(server, onStatusChange)));
}