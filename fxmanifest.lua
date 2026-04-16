fx_version 'cerulean'
games { 'gta5' }

author 'MD Studio'
description 'Écran de chargement interactif Premium'
version '1.0.0'

loadscreen 'index.html'
client_script 'client.lua'
server_script 'server.lua'

loadscreen_manual_shutdown 'yes' 
loadscreen_cursor 'yes'

files {
    'index.html',
    'style.css',
    'config.js',
    'script.js',
    'assets/**/*'
}