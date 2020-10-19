exports.getDeviceInfo = () => {
  return {
    lists: [
      {
        key: 'ESP_01',
        type: 'ESP',
        name: 'ESP_01',
        ip: '10.1.31.143',
        status: [
          'Rapid Collector (Up 12 seconds)',
          'Postgres (Exited 12 seconds)',
        ],
        volume: '100G / 500G',
      },
      {
        key: 'OTS_01',
        type: 'OTS',
        name: 'OTS_01',
        ip: '10.1.31.144',
        status: ['File Service Collect (Up 12 seconds)'],
        volume: '100G / 500G',
      },
      {
        key: 'OTS_02',
        type: 'OTS',
        name: 'OTS_02',
        ip: '10.1.31.144',
        status: ['File Service Collect (Up 12 seconds)'],
        volume: '100G / 500G',
      },
      {
        key: 'OTS_03',
        type: 'OTS',
        name: 'OTS_03',
        ip: '10.1.31.144',
        status: ['File Service Collect (Up 12 seconds)'],
        volume: '100G / 500G',
      },
      {
        key: 'OTS_04',
        type: 'OTS',
        name: 'OTS_04',
        ip: '10.1.31.144',
        status: ['Unknown'],
        volume: '100G / 500G',
      },
      {
        key: 'OTS_05',
        type: 'OTS',
        name: 'OTS_05',
        ip: '10.1.31.144',
        status: ['File Service Collect (Up 12 seconds)'],
        volume: '100G / 500G',
      },
    ],
  };
};

exports.getFileInfo = (deviceName) => {
  const response = [];
  const types = [
    'login',
    'job',
    'downloadFile',
    'process',
    'fileStatus',
    'error',
    'tomcat',
  ];

  for (let type of types) {
    for (let i = 0; i < types.length; i++) {
      response.push({
        fileType: type,
        fileName: `${deviceName}_${type}_${i}.log`,
        fileSize: '24 KB',
      });
    }
  }

  return response;
};
