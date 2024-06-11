
type familyObject = {
    id: string, // Acts as both the name and the unique ID for relationships
    subtitle: string, // [optional] Used for a persons title
    generation: number, // The family generation, used to set the node Y position
    dob: string, // [optional] Free text for Date Of Birth
    dod: string, // [optional] Free text for Date of Death
    relations: any, // [optional] and array of objects,
    children: number, // [optional] Number of children, usually set on wife used to offset Y of the following node
}


// First three generations.
const generation_1_2 = [
    // 1 First Generation
    {
        id: 'Haj-Mirza-Jabbar TASKEREH-CHI',
        subtitle: 'Nazem-ol-Moham',
        generation: 1,
        dob: 'Circa 1775',
        relations: [],
        children: 3,
        //: { x: 1000, y: 0 }

    },
    // 2 Second Generation
    {
        id: 'Hadj-Hassan-Ali KHOII',
        generation: 2,
        dob: 'Circa 1800',
        relations: [{ source: 'Haj-Mirza-Jabbar TASKEREH-CHI', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Wife of Hadj-Hassan-Ali KHOII',
        generation: 2,
        dob: 'Circa 1800',
        relations: [{ source: 'Hadj-Hassan-Ali KHOII', target: 'Wife of Hadj-Hassan-Ali KHOII', relationship: 'wife' }],
        children: 5,
    },
    {
        id: 'Hadj Hossain Ali KHOII',
        generation: 2,
        relations: [{ source: 'Haj-Mirza-Jabbar TASKEREH-CHI', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Agha REZAII',
        generation: 2,
        relations: [{ source: 'Hadj Hossain Ali KHOII', target: 'Agha REZAII', relationship: 'wife' }],
    },
    {
        id: 'Hadj Safar Ali KHOII',
        generation: 2,
        relations: [{ source: 'Haj-Mirza-Jabbar TASKEREH-CHI', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Hadj Jabbar Khan',
        subtitle: 'Nazem-ed-Doleh (1852)',
        generation: 2,
        dob: '1827',
        dod: '- 18??',
        relations: [{ source: 'Hadj Safar Ali KHOII', target: 'Hadj Jabbar Khan', relationship: 'wife' }],
        children: 2,
    },
];
//        offset: {x:100, y:100}

const generation_3: any = [

    // 3 Third Generation
    {
        id: 'Mirza Abdol Ghani KHOII',
        generation: 3,
        dob: 'Circa 1830',
        relations: [{ source: 'Wife of Hadj-Hassan-Ali KHOII', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Satereh Khanoom',
        generation: 3,
        relations: [{ source: 'Mirza Abdol Ghani KHOII', target: '_self', relationship: 'wife' },],
        children: 3,
    },

    {
        id: 'Mirza Ibraheem Khan',
        generation: 3,
        relations: [{ source: 'Wife of Hadj-Hassan-Ali KHOII', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Khanoom Bozorg',
        generation: 3,
        relations: [{ source: 'Mirza Ibraheem Khan', target: '_self', relationship: 'wife' },],
        children: 5,
    },
    {
        id: 'Mirza Najaf Ali SARTIP',
        generation: 3,
        relations: [{ source: 'Wife of Hadj-Hassan-Ali KHOII', target: '_self', relationship: 'son' },],
    },
    {
        id: 'Ezat Soltan Khanoom',
        generation: 3,
        relations: [{ source: 'Mirza Najaf Ali SARTIP', target: '_self', relationship: 'wife' },],
    },
    {
        id: 'Mirza Safar Ali',
        generation: 3,
        relations: [{ source: 'Wife of Hadj-Hassan-Ali KHOII', target: '_self', relationship: 'son' },],
    },
    {
        id: 'Khadijeh Soltan',
        generation: 3,
        relations: [{ source: 'Mirza Safar Ali', target: '_self', relationship: 'wife' },],
    },
    // two wives
    {
        id: 'Sakineh Khanoom (Toly)',
        generation: 3,
        relations: [{ source: 'Wife of Hadj-Hassan-Ali KHOII', target: '_self', relationship: 'son' },],
    },
    {
        id: 'Ali SEGHATOL-ESLAM',
        generation: 3,
        relations: [{ source: 'Sakineh Khanoom (Toly)', target: '_self', relationship: 'wife - martyred' }],
    },
    {
        id: 'Moosa SEGHATOL-ESLAM',
        generation: 3,
        relations: [{ source: 'Sakineh Khanoom (Toly)', target: '_self', relationship: 'wife' },],
        children: 6, // having seven children fixes it :( when they actually have 6
        offset: { x: 0, y: 0 }
    },
    // Something occuring here :( both families end up the same x position
    // Adding 6 children to Moosa SEGHATOL-ESLAM doesn't push x pos far enough
    {
        id: 'Mirza Javad SEED-ED-DOLEH',
        generation: 3,
        dob: '1856',
        dod: ' - 1929',
        relations: [{ source: 'Hadj Jabbar Khan', target: '_self', relationship: 'son' },],
    },
    {
        id: 'Frangiss Khanoom',
        generation: 3,
        relations: [{ source: 'Mirza Javad SEED-ED-DOLEH', target: '_self', relationship: 'wife' },],
        children: 3,
        offset: { x: 0, y: 0 }

    },
    {
        id: 'Morteza POORMORTAZAVI',
        subtitle: 'Momtaz-ol-Molk',
        generation: 3,
        dob: '1864',
        dod: ' - 1926',
        relations: [{ source: 'Hadj Jabbar Khan', target: '_self', relationship: 'son' },],
        offset: { x: 0, y: 0 }
    },
    {
        id: 'Wife of Morteza POORMORTAZAVI',
        generation: 3,
        relations: [{ source: 'Morteza POORMORTAZAVI', target: '_self', relationship: 'wife' },],
        children: 3,
        offset: { x: 0, y: 0 }
    },
];

/*
* My presumption is the first born is on the left and last born on the right?
* Explanation of "generation_4__1_1":
*   `generation_4` is the generation
*   `__` (double underscore) is a separator
*   `1_1` is child of child, i.e. first child of first child
*   (or
*  `1_2` is second child of first child)
*/

// Fourth Generation - first great grandchilden Mofakhams
const generation_4__1_1: any = [
    {
        id: 'Esagh MOFAKHAM',
        subtitle: 'Mofakham-ed-Doleh',
        generation: 4,
        dob: '1861',
        dod: ' - 1939',
        relations: [{ source: 'Satereh Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Zahra PEERNIA',
        subtitle: 'Jalilsaltaneh',
        generation: 4,
        dob: '1886',
        dod: ' - 1969',
        relations: [{ source: 'Esagh MOFAKHAM', target: '_self', relationship: 'wife' }],
    },
    {
        id: 'Hashem MOFAKHAM',
        subtitle: 'Mofakham-el-Soltan',
        generation: 4,
        relations: [{ source: 'Satereh Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Wife of Hashem Mofakham',
        subtitle: 'Died of TB age 31',
        generation: 4,
        relations: [{ source: 'Hashem MOFAKHAM', target: '_self', relationship: 'wife' }],
    },
    {
        id: 'Mahmoud MOFAKHAM',
        subtitle: 'Mofakham-ed-Doleh',
        generation: 4,
        dob: '1871',
        dod: ' - 1943',
        relations: [{ source: 'Satereh Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Khadijeh Soltan Khanoom',
        generation: 4,
        dob: '18??',
        dod: ' - 1945',
        relations: [{ source: 'Mahmoud MOFAKHAM', target: '_self', relationship: 'wife' }],
    },
];
// Fourth Generation - second great grandchilden
const generation_4__1_2: any = [
    {
        id: 'Mirza Hassan-Ali Khan',
        generation: 4,
        relations: [{ source: 'Khanoom Bozorg', target: '_self', relationship: 'son' }],
    },
    {
        id: 'EGHBAL-ol-MOLK',
        generation: 4,
        relations: [{ source: 'Khanoom Bozorg', target: '_self', relationship: 'son' }],
    },
    {
        id: 'FAKHEEM-ol-SOLTAN',
        generation: 4,
        relations: [{ source: 'Khanoom Bozorg', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Haj Mirza Kazem Khan',
        generation: 4,
        relations: [{ source: 'Khanoom Bozorg', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Ashraf Khanoom (BADR)',
        generation: 4,
        relations: [{ source: 'Khanoom Bozorg', target: '_self', relationship: 'son' }],
    },
];
// Fourth Generation - fifth great grandchilden
const generation_4__1_5: any = [
    {
        id: 'Mirza Yahya Khan',
        generation: 4,
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Mirza Raffi Khan',
        generation: 4,
        dob: '1862',
        dod: ' - 1911',
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Kobra Khanoom',
        generation: 4,
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'daughter' }],
    },
    {
        id: 'Mohamad GHALEBAGHI',
        generation: 4,
        relations: [{ source: 'Kobra Khanoom', target: '_self', relationship: 'husband' }],
    },
    {
        id: 'Rakhshandeh Khanoom',
        generation: 4,
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Ozra Khanoom',
        generation: 4,
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'daughter' }],
    },
    {
        id: 'Abbas Gholi RAFII',
        generation: 4,
        relations: [{ source: 'Ozra Khanoom', target: '_self', relationship: 'husband' }],
    },
    {
        id: 'Alieh Khanoom',
        generation: 4,
        relations: [{ source: 'Moosa SEGHATOL-ESLAM', target: '_self', relationship: 'son' }],
    },

];
// Fourth Generation - sixth great grandchilden
const generation_4__3_1: any = [
    {
        id: 'Baadry',
        generation: 4,
        relations: [{ source: 'Frangiss Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Nazanin',
        generation: 4,
        relations: [{ source: 'Baadry', target: '_self', relationship: 'wife' }],
    },
    {
        id: 'Mehry',
        generation: 4,
        relations: [{ source: 'Frangiss Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Noosh Afarin',
        generation: 4,
        relations: [{ source: 'Mehry', target: '_self', relationship: 'wife' }],
    },
    {
        id: 'Hossain',
        generation: 4,
        relations: [{ source: 'Frangiss Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Hassan',
        generation: 4,
        relations: [{ source: 'Hossain', target: '_self', relationship: 'wife' }],
    },
];
// Fourth Generation - seventh great grandchilden
const generation_4__3_2: any = [
    {
        id: 'First Daughter',
        generation: 4,
        relations: [{ source: 'Wife of Morteza POORMORTAZAVI', target: '_self', relationship: 'daughter' }],
    },
    {
        id: 'Parveez MOMTAZ-ol-MOLK',
        generation: 4,
        relations: [{ source: 'Wife of Morteza POORMORTAZAVI', target: '_self', relationship: 'daughter' }],
    },
    {
        id: 'Third Daughter',
        generation: 4,
        relations: [{ source: 'Wife of Morteza POORMORTAZAVI', target: '_self', relationship: 'daughter' }],
    },

];

/**
 * Now we deep dive into the Mofakhams.
 */
const generation_5_eshagh: any = [
    {
        id: 'Parveez MOFAKHAM',
        generation: 5,
        dob: '1907',
        dod: ' - 1945',
        relations: [{ source: 'Zahra PEERNIA', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Blanche',
        generation: 5,
        dob: '1907',
        dod: ' - 1945',
        relations: [{ source: 'Parveez MOFAKHAM', target: '_self', relationship: 'wife' }],
    },
    {
        id: 'Jamsheed MOFAKHAM',
        generation: 5,
        dob: '1910',
        dod: ' - 1984',
        relations: [{ source: 'Zahra PEERNIA', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Iran Dokht MOFAKHAM',
        generation: 5,
        dob: '1909',
        dod: ' - 1993',
        relations: [{ source: 'Zahra PEERNIA', target: '_self', relationship: 'daughter' }],
    },
    {
        id: 'Hossain SAHEBJAM',
        generation: 5,
        dob: '1885',
        dod: ' - 1957',
        relations: [{ source: 'Iran Dokht MOFAKHAM', target: '_self', relationship: 'husband' }],
    },
    {
        id: 'Soryeh Soltan',
        subtitle: 'Died of TB very young',
        generation: 5,
        relations: [{ source: 'Wife of Hashem Mofakham', target: '_self', relationship: 'husband' }],
    },
    /// Mofakhams
    
    {
        id: 'Masood MOFAKHAM',
        subtitle: 'Mofakham-ol-Soltan',
        generation: 5,
        dob: '1889',
        dod: ' - 1953',
        relations: [{ source: 'Khadijeh Soltan Khanoom', target: '_self', relationship: 'son' }],
    },
];




const generation_5_hashem: any = [

];
const generation_5_mahmoud: any = [

];



const combined = [
    ...generation_1_2,
    ...generation_3,
    ...generation_4__1_1,
    ...generation_4__1_2,
    ...generation_4__1_5,
    ...generation_4__3_1,
    ...generation_4__3_2,
    ...generation_5_eshagh,


];
//console.log('combined', combined);

export const familyData: any = combined;
