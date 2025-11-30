// Maharashtra Districts and Major Cities Data
export const maharashtraData = [
  { district: 'Mumbai', cities: ['Mumbai', 'Navi Mumbai', 'Thane'], population: 12442373 },
  { district: 'Pune', cities: ['Pune', 'Pimpri-Chinchwad', 'Baramati'], population: 9429408 },
  { district: 'Nagpur', cities: ['Nagpur', 'Kamptee', 'Wardha'], population: 4653570 },
  { district: 'Nashik', cities: ['Nashik', 'Malegaon', 'Sinnar'], population: 6107187 },
  { district: 'Aurangabad', cities: ['Aurangabad', 'Jalna', 'Beed'], population: 3701282 },
  { district: 'Solapur', cities: ['Solapur', 'Barshi', 'Pandharpur'], population: 4317756 },
  { district: 'Kolhapur', cities: ['Kolhapur', 'Ichalkaranji', 'Sangli'], population: 3876001 },
  { district: 'Sangli', cities: ['Sangli', 'Miraj', 'Tasgaon'], population: 2822143 },
  { district: 'Jalgaon', cities: ['Jalgaon', 'Bhusawal', 'Amalner'], population: 4229917 },
  { district: 'Ahmednagar', cities: ['Ahmednagar', 'Shrirampur', 'Kopargaon'], population: 4543159 },
  { district: 'Satara', cities: ['Satara', 'Karad', 'Wai'], population: 3003741 },
  { district: 'Latur', cities: ['Latur', 'Ausa', 'Udgir'], population: 2454196 },
  { district: 'Dhule', cities: ['Dhule', 'Nandurbar', 'Shirpur'], population: 2050862 },
  { district: 'Nanded', cities: ['Nanded', 'Hingoli', 'Kinwat'], population: 3361292 },
  { district: 'Ratnagiri', cities: ['Ratnagiri', 'Chiplun', 'Khed'], population: 1615069 },
  { district: 'Amravati', cities: ['Amravati', 'Achalpur', 'Daryapur'], population: 2888445 },
  { district: 'Yavatmal', cities: ['Yavatmal', 'Wani', 'Pusad'], population: 2772348 },
  { district: 'Raigad', cities: ['Alibag', 'Pen', 'Mahad'], population: 2634200 },
  { district: 'Chandrapur', cities: ['Chandrapur', 'Ballarpur', 'Warora'], population: 2192609 },
  { district: 'Jalna', cities: ['Jalna', 'Ambad', 'Bhokardan'], population: 1959046 },
];

// Get all cities count for each district
export const getCitiesCount = () => {
  return maharashtraData.map(item => ({
    district: item.district,
    citiesCount: item.cities.length,
    population: item.population
  }));
};

// Get all cities flattened
export const getAllCities = () => {
  const allCities = [];
  maharashtraData.forEach(district => {
    district.cities.forEach(city => {
      allCities.push({
        city: city,
        district: district.district,
        population: district.population
      });
    });
  });
  return allCities;
};

