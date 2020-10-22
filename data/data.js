exports.getDeviceInfo = () => {
  return {
    list: [
      {
        name: 'ESP',
        type: 'ESP',
        host: '-',
        containers: [
          {
            name: 'Rapid-Collector',
            status: 'Exited (0) 24 minutes ago',
          },
          {
            name: 'Database',
            status: 'Exited (0) 4 minutes ago',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
      },
      {
        name: 'OTS_01',
        type: 'OTS',
        host: '10.1.31.111',
        containers: [
          {
            name: 'FileServiceCollect',
            status: 'Up 3 minutes',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
      },
      {
        name: 'OTS_02',
        type: 'OTS',
        host: '10.1.31.112',
        containers: [
          {
            name: 'FileServiceCollect',
            status: 'Unknown',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
      },
      {
        name: 'OTS_03',
        type: 'OTS',
        host: '10.1.31.113',
        containers: [
          {
            name: 'FileServiceCollect',
            status: 'Up (0) 24 minutes ago',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
      },
      {
        name: 'OTS_04',
        type: 'OTS',
        host: '10.1.31.114',
        containers: [
          {
            name: 'FileServiceCollect',
            status: 'Exited (0) 24 minutes ago',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
      },
      {
        name: 'OTS_05',
        type: 'OTS',
        host: '10.1.31.115',
        containers: [
          {
            name: 'FileServiceCollect',
            status: 'Unknown',
          },
        ],

        volumeUsed: '100G',
        volumeTotal: '500G',
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
