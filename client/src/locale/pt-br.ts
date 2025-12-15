export const logout = 'sair'
export const unsupported = 'este navegador não suporta WebRTC'
export const admin_loggedin = 'Você está logado como administrador'
export const you = 'Você'
export const somebody = 'Alguém'
export const send_a_message = 'Enviar uma mensagem'

export const side = {
  chat: 'Chat',
  files: 'Arquivos',
  settings: 'Configurações',
}

export const connect = {
  login_title: 'Faça Login',
  invitation_title: 'Você foi convidado para esta sala',
  displayname: 'Digite seu nome',
  password: 'Senha',
  connect: 'Conectar',
  error: 'Erro de login',
  empty_displayname: 'O nome não pode estar vazio.',
}

export const context = {
  ignore: 'Ignorar',
  unignore: 'Parar de ignorar',
  mute: 'Silenciar',
  unmute: 'Ativar som',
  release: 'Forçar liberação do controle',
  take: 'Forçar tomada do controle',
  give: 'Passar controle',
  kick: 'Expulsar',
  ban: 'Banir IP',
  confirm: {
    kick_title: 'Expulsar {name}?',
    kick_text: 'Tem certeza que deseja expulsar {name}?',
    ban_title: 'Banir {name}?',
    ban_text: 'Deseja banir {name}? Você precisará reiniciar o servidor para desfazer isso.',
    mute_title: 'Silenciar {name}?',
    mute_text: 'Tem certeza que deseja silenciar {name}?',
    unmute_title: 'Ativar som de {name}?',
    unmute_text: 'Deseja ativar o som de {name}?',
    button_yes: 'Sim',
    button_cancel: 'Cancelar',
  },
}

export const controls = {
  release: 'Liberar Controle',
  request: 'Solicitar Controle',
  lock: 'Bloquear Controles',
  unlock: 'Desbloquear Controles',
  has: 'Você tem o controle',
  hasnot: 'Você não tem o controle',
}

export const locks = {
  control: {
    lock: 'Bloquear controles (para usuários)',
    unlock: 'Desbloquear controles (para usuários)',
    locked: 'Controles bloqueados (para usuários)',
    unlocked: 'Controles desbloqueados (para usuários)',
    notif_locked: 'bloqueou os controles para usuários',
    notif_unlocked: 'desbloqueou os controles para usuários',
  },
  login: {
    lock: 'Trancar sala (para usuários)',
    unlock: 'Destrancar sala (para usuários)',
    locked: 'Sala trancada (para usuários)',
    unlocked: 'Sala aberta (para usuários)',
    notif_locked: 'trancou a sala',
    notif_unlocked: 'abriu a sala',
  },
  file_transfer: {
    lock: 'Bloquear transferência de arquivos (para usuários)',
    unlock: 'Desbloquear transferência de arquivos (para usuários)',
    locked: 'Transferência de arquivos bloqueada (para usuários)',
    unlocked: 'Transferência de arquivos liberada (para usuários)',
    notif_locked: 'bloqueou transferência de arquivos',
    notif_unlocked: 'liberou transferência de arquivos',
  },
}

export const setting = {
  scroll: 'Sensibilidade do scroll',
  scroll_invert: 'Inverter scroll',
  autoplay: 'Reproduzir vídeo automaticamente',
  ignore_emotes: 'Ignorar emotes',
  chat_sound: 'Som do chat',
  keyboard_layout: 'Layout do teclado',
  broadcast_title: 'Transmissão ao vivo',
}

export const connection = {
  logged_out: 'Você foi desconectado.',
  reconnecting: 'Reconectando...',
  connected: 'Conectado',
  disconnected: 'Desconectado',
  kicked: 'Você foi removido desta sala.',
  button_confirm: 'OK',
}

export const notifications = {
  connected: '{name} conectou',
  disconnected: '{name} desconectou',
  controls_taken: '{name} assumiu o controle',
  controls_taken_force: 'assumiu o controle à força',
  controls_taken_steal: 'tomou o controle de {name}',
  controls_released: '{name} liberou o controle',
  controls_released_force: 'liberou o controle à força',
  controls_released_steal: 'liberou o controle de {name}',
  controls_given: 'passou o controle para {name}',
  controls_has: '{name} tem o controle',
  controls_has_alt: 'Mas eu avisei que você queria',
  controls_requesting: '{name} está solicitando o controle',
  resolution: 'alterou a resolução para {width}x{height}@{rate}',
  banned: 'baniu {name}',
  kicked: 'expulsou {name}',
  muted: 'silenciou {name}',
  unmuted: 'ativou o som de {name}',
}

export const files = {
  downloads: 'Downloads',
  uploads: 'Uploads',
  upload_here: 'Clique ou arraste arquivos aqui para enviar',
}
