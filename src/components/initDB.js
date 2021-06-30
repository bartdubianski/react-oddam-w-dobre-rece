const dbRef = firebase.firestore().collection("whowehelp");

await dbRef.doc('1').set({
    name: 'Dbam o Zdrowie',
    type: "fundation",
    description: "Pomoc osobom znajdującym się w trudnej sytuacji zyciowej",
    needs: "ubrania, jedzenie, sprzet AGD, meble i zabawki"
  });
await dbRef.doc('2').set({
    name: 'Dla dzieci',
    type: "fundation",
    description: "Pomoc dzieciom z ubogich rodzin",
    needs: "ubrania, meble, zabawki"
  });
  await dbRef.doc('3').set({
    name: 'Bez domu',
    type: "fundation",
    description: "Pomoc dla osob nie posiadajacych miejsca zamieszkania",
    needs: "ubrania, jedzenie, cieple koce"
  });
  await dbRef.doc('4').set({
      name: 'Lorem Ipsum 1',
      type: "local",
      description: "Local Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('5').set({
      name: 'Lorem Ipsum 2',
      type: "local",
      description: "Local Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('6').set({
      name: 'Lorem Ipsum 3',
      type: "local",
      description: "Ngo Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('7').set({
      name: 'Lorem Ipsum 1',
      type: "ngo",
      description: "Ngo Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('8').set({
      name: 'Lorem Ipsum 2',
      type: "ngo",
      description: "Ngo escription description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('9').set({
      name: 'Lorem Ipsum 3',
      type: "ngo",
      description: "Ngo escription description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('10').set({
      name: 'Lorem Ipsum 4',
      type: "ngo",
      description: "Ngo escription description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('11').set({
      name: 'Lorem Ipsum 5',
      type: "ngo",
      description: "Ngo Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('12').set({
      name: 'Lorem Ipsum 6',
      type: "ngo",
      description: "Ngo Description description description description",
      needs: "need, need, need"
  });
  await dbRef.doc('15').set({
      name: 'Dbam o Zdrowie 2',
      type: "fundation",
      description: "Pomoc osobom znajdującym się w trudnej sytuacji zyciowej",
      needs: "ubrania, jedzenie, sprzet AGD, meble i zabawki"
    });
    await dbRef.doc('13').set({
      name: 'Dla dzieci 2',
      type: "fundation",
      description: "Pomoc dzieciom z ubogich rodzin",
      needs: "ubrania, meble, zabawki"
    });
    await dbRef.doc('14').set({
      name: 'Bez domu 2',
      type: "fundation",
      description: "Pomoc dla osob nie posiadajacych miejsca zamieszkania",
      needs: "ubrania, jedzenie, cieple koce"
    });