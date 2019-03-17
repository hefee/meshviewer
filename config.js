module.exports = function () {
  return {
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://data.meshviewer.org/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://multi.meshviewer.org/graph/000000002/node?panelId=1&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Hardwareauslastung',
        'href': 'https://data.meshviewer.org/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://multi.meshviewer.org/graph/000000002/node?panelId=4&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'href': 'https://data.meshviewer.org/d/nvSNqoHmz/link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'https://multi.meshviewer.org/graph/nvSNqoHmz/link?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'linkTypeInfos': [
      {
        'name': 'Statistik für {TYPE}',
        'href': 'https://data.meshviewer.org/d/nvSNqoHmz/link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}',
        'image': 'https://multi.meshviewer.org/graph/nvSNqoHmz/link?panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'http://karte.leipzig.freifunk.net:8018/meshviewer2/data/'
    ],
    'siteName': 'Freifunk Leipzig',
    'mapLayers': [
      {
        'name': 'Freifunk Leipzig',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'start': 6
        }
      },
      {
        'name': 'Freifunk Leipzig Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'mode': 'night',
          'start': 19,
          'end': 7
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
  	51.4168,
        12.1983
      ],
      // Southeast
      [
	51.2516,
	12.4791
      ]
    ],
    'domainNames': [
      {
        'domain': 'l',
        'name': 'Leipzig (Gluon)'
      },
      {
        'domain': 'meshkit',
        'name': 'Leipzig (meshkit)'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk.net/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk.net/datenschutz/'
      }
    ]
  };
};
