export const apps = [
  {
    name: "c2-reactjs",
    script: "node server",
    ignore_watch: ["node_modules"],
    instances: 1,
    autorestart: true,
    max_memory_restart: "1G",
    env: {
      REACT_APP_STAGE: "staging",
      PORT: 3000,
      NODE_ENV: "production",
    },
  },
];
