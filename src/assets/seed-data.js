const state = {
  nodes: {
    1: {
      title: '1-title',
      body: '1-body',
      children: [2, 3],
    },
    2: {
      title: '2-title',
      body: '2-body',
      children: [4, 5],
    },
    3: {
      title: '3-title',
      body: '3-body',
      children: [6, 7],
    },
    4: {
      title: '4-title',
      body: '4-body',
      children: [8, 9],
    },
    5: {
      title: '5-title',
      body: '5-body',
      children: [10, 11],
    },
    6: {
      title: '6-title',
      body: '6-body',
      children: [12, 13],
    },
    7: {
      title: '7-title',
      body: '7-body',
      children: [14, 15],
    },
  },
  current: '1',
}

export default state;
