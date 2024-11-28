const fontData=[0,0,0,0,0,0,0,0,0,16,16,16,16,16,0,16,0,40,40,0,0,0,0,0,0,20,20,124,40,124,80,80,0,16,56,80,56,20,56,16,0,36,84,40,16,40,84,72,0,48,72,80,32,84,72,52,0,16,16,0,0,0,0,0,0,8,16,32,32,32,16,8,0,32,16,8,8,8,16,32,0,84,56,56,84,0,0,0,0,0,16,16,124,16,16,0,0,0,0,0,0,16,16,32,0,0,0,0,124,0,0,0,0,0,0,0,0,0,16,16,0,8,8,16,16,16,32,32,0,56,68,76,84,100,68,56,0,16,48,16,16,16,16,56,0,56,68,4,24,32,64,124,0,56,68,4,24,4,68,56,0,8,24,40,72,124,8,8,0,124,64,64,56,4,68,56,0,56,68,64,120,68,68,56,0,124,4,4,8,8,16,16,0,56,68,68,56,68,68,56,0,56,68,68,60,4,68,56,0,16,16,0,0,0,16,16,0,16,16,0,0,16,16,32,0,8,16,32,64,32,16,8,0,0,0,124,0,124,0,0,0,32,16,8,4,8,16,32,0,56,68,4,8,16,0,16,0,56,68,84,108,92,64,60,0,56,68,68,124,68,68,68,0,120,68,68,120,68,68,120,0,56,68,64,64,64,68,56,0,120,68,68,68,68,68,120,0,124,64,64,120,64,64,124,0,124,64,64,120,64,64,64,0,56,68,64,76,68,68,56,0,68,68,68,124,68,68,68,0,56,16,16,16,16,16,56,0,60,8,8,8,8,72,48,0,68,72,80,96,80,72,68,0,64,64,64,64,64,64,124,0,68,108,84,84,68,68,68,0,68,100,100,84,76,76,68,0,56,68,68,68,68,68,56,0,120,68,68,120,64,64,64,0,56,68,68,68,84,76,56,0,120,68,68,120,80,72,68,0,56,68,64,56,4,68,56,0,124,16,16,16,16,16,16,0,68,68,68,68,68,68,56,0,68,68,68,40,40,16,16,0,68,68,84,84,84,84,40,0,68,68,40,16,40,68,68,0,68,68,40,16,16,16,16,0,124,4,8,16,32,64,124,0,56,32,32,32,32,32,56,0,32,32,16,16,16,8,8,0,56,8,8,8,8,8,56,0,16,40,68,0,0,0,0,0,0,0,0,0,0,0,124,0,32,16,8,0,0,0,0,0,0,0,56,4,60,68,60,0,64,64,120,68,68,68,120,0,0,0,56,64,64,64,56,0,4,4,60,68,68,68,60,0,0,0,56,68,120,64,56,0,12,16,56,16,16,16,16,0,0,0,60,68,60,4,56,0,64,64,120,68,68,68,68,0,16,0,16,16,16,16,16,0,16,0,16,16,16,16,96,0,64,64,72,80,96,80,72,0,16,16,16,16,16,16,8,0,0,0,104,84,84,84,84,0,0,0,120,68,68,68,68,0,0,0,56,68,68,68,56,0,0,0,120,68,120,64,64,0,0,0,60,68,60,4,4,0,0,0,88,100,64,64,64,0,0,0,56,64,56,4,56,0,0,16,56,16,16,16,8,0,0,0,68,68,68,68,56,0,0,0,68,68,68,40,16,0,0,0,84,84,84,84,40,0,0,0,68,40,16,40,68,0,0,0,68,68,60,4,56,0,0,0,124,8,16,32,124,0,24,32,32,64,32,32,24,0,16,16,16,16,16,16,16,0,48,8,8,4,8,8,48,0,0,0,0,52,72,0,0,255,255,255,255,255,255,255,255],waveVisData=[57344,40960,40960,40960,40960,40960,40960,49151,63488,34816,34816,34816,34816,34816,34816,36863,65408,32896,32896,32896,32896,32896,32896,33023,36863,34816,34816,34816,34816,34816,34816,63488,384,576,1056,2064,4104,8196,16386,32769,23805,21669,21669,21669,21669,21669,21669,63399,44718,43690,43690,43690,43690,43690,43690,64507,14336,17408,33292,33299,288,288,192,0];function fillCharcater(a,b,c,d){for(let e,f=0;8>f;f++){e=b.charCodeAt(0),(32>e||127<=e)&&(e=127),e-=32;let g=fontData[8*e+f];for(let b=0;8>b;b++)128&g&&a.fillRect(c+b,d+f,1,1),g<<=1}}function fillWaveVis(a,b,c,d){for(let e,f=0;8>f;f++){e=waveVisData[8*b+f];for(let b=0;16>b;b++)32768&e&&a.fillRect(c+b,d+f,1,1),e<<=1}}function fillString(a,b,d,e){for(let f,c=0;c<b.length;c++)f=b.charAt(c),fillCharcater(a,f,d,e),d+=8}