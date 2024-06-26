module.exports = {
apps: [
   {
name: 'apivip',
script: './index.js',
env: {
	NODE_ENV: 'production'
	PORT:8080,
},
   },
  ],
};