self.addEventListener('install', (event) => {
  console.log('Service Worker installing.')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.')
})

self.addEventListener('fetch', (event) => {
  // Bisa dipakai buat offline cache
})
