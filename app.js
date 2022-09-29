// https://www.omnicalculator.com/everyday-life/well-volume

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const wellvolumeRadio = document.getElementById('wellvolumeRadio');
const welldiameterRadio = document.getElementById('welldiameterRadio');
const totalwelldepthRadio = document.getElementById('totalwelldepthRadio');
const staticwaterdepthRadio = document.getElementById('staticwaterdepthRadio');

let wellvolume;
const PI = Math.PI;
let welldiameter = v1;
let totalwelldepth = v2;
let staticwaterdepth = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

wellvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Well diameter';
  variable2.textContent = 'Total well depth';
  variable3.textContent = 'Static water depth';
  welldiameter = v1;
  totalwelldepth = v2;
  staticwaterdepth = v3;
  result.textContent = '';
});

welldiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Well volume';
  variable2.textContent = 'Total well depth';
  variable3.textContent = 'Static water depth';
  wellvolume = v1;
  totalwelldepth = v2;
  staticwaterdepth = v3;
  result.textContent = '';
});

totalwelldepthRadio.addEventListener('click', function() {
  variable1.textContent = 'Well volume';
  variable2.textContent = 'Well diameter';
  variable3.textContent = 'Static water depth';
  wellvolume = v1;
  welldiameter = v2;
  staticwaterdepth = v3;
  result.textContent = '';
});

staticwaterdepthRadio.addEventListener('click', function() {
  variable1.textContent = 'Well volume';
  variable2.textContent = 'Well diameter';
  variable3.textContent = 'Total well depth';
  wellvolume = v1;
  welldiameter = v2;
  totalwelldepth = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(wellvolumeRadio.checked)
    result.textContent = `Well volume = ${computewellvolume().toFixed(2)}`;

  else if(welldiameterRadio.checked)
    result.textContent = `Well diameter = ${computewelldiameter().toFixed(2)}`;

  else if(totalwelldepthRadio.checked)
    result.textContent = `Total well depth = ${computetotalwelldepth().toFixed(2)}`;

  else if(staticwaterdepthRadio.checked)
    result.textContent = `Static water depth = ${computestaticwaterdepth().toFixed(2)}`;
})

// calculation

// wellvolume = π/4 * (welldiameter)² * (totalwelldepth - staticwaterdepth)

function computewellvolume() {
  return (PI / 4) * Math.pow(Number(welldiameter.value), 2) * (Number(totalwelldepth.value) - Number(staticwaterdepth.value));
}

function computewelldiameter() {
  return Math.sqrt(Number(wellvolume.value) / ((PI / 4) * (Number(totalwelldepth.value) - Number(staticwaterdepth.value))));
}

function computetotalwelldepth() {
  return (Number(wellvolume.value) / ((PI / 4) * Math.pow(Number(welldiameter.value), 2))) + Number(staticwaterdepth.value);
}

function computestaticwaterdepth() {
  return Number(totalwelldepth.value) - (Number(wellvolume.value) / ((PI / 4) * Math.pow(Number(welldiameter.value), 2)));
}