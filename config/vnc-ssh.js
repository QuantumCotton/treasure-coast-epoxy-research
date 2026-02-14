// VNC and SSH configuration for treasure-coast-epoxy-research
const vncConfig = {
  host: '76.13.101.120',
  port: 5901,
  password: 'clawd123',
  autoReconnect: true
};

const sshConfig = {
  host: '76.13.101.120',
  port: 22,
  username: 'chris',
  password: 'clawd123',
  autoReconnect: true
};

module.exports = {
  vnc: vncConfig,
  ssh: sshConfig,
  server: {
    port: 3000,
    host: 'localhost'
  }
};
