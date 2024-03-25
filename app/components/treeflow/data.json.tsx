
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
const family = [
    // 1 First Generation
    {
        id: 'Haj-Mirza-Jabbar TASKEREH-CHI',
        subtitle: 'Nazem-ol-Moham',
        generation: 1,
        dob: 'Circa 1775',
        relations: [],
        children: 3,
        offset: { x: 1000, y: 0 }

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
    // 3 Thrid Generation
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
        relations: [{ source: 'Sakineh Khanoom (Toly)', target: '_self', relationship: 'wife - martyred'}],
    },
    {
        id: 'Moosa SEGHATOL-ESLAM',
        generation: 3,
        relations: [{ source: 'Sakineh Khanoom (Toly)', target: '_self', relationship: 'wife'},],
        children: 6,
    },
    // next son
    {
        id: 'Mirza Javad SEED-ED-DOLEH',
        generation: 3,
        dob: '1856',
        dod: ' - 1929',
        relations: [{ source: 'Hadj Jabbar Khan', target: '_self', relationship: 'son'},],
    },
    {
        id: 'Frangiss Khanoom',
        generation: 3,
        relations: [{ source: 'Mirza Javad SEED-ED-DOLEH', target: '_self', relationship: 'wife'},],
        children: 3,
    },
    {
        id: 'Morteza POORMORTAZAVI',
        subtitle: 'Momtaz-ol-Molk',
        generation: 3,
        dob: '1864',
        dod: ' - 1926',
        relations: [{ source: 'Hadj Jabbar Khan', target: '_self', relationship: 'son'},],
    },
    {
        id: 'Wife of Morteza POORMORTAZAVI',
        generation: 3,
        relations: [{ source: 'Morteza POORMORTAZAVI', target: '_self', relationship: 'wife'},],
        children: 3,
    },
    
];
//        offset: {x:100, y:100}

// Fourth Generation
const generation_4: any = [
    {
        id: 'Esagh MOFAKHAM',
        subtitle: 'Mofakham-ed-Doleh',
        generation: 4,
        dob: '1861',
        dod: ' - 1939',
        relations: [{ source: 'Satereh Khanoom', target: '_self', relationship: 'son' }],
    },
    {
        id: 'Hashem MOFAKHAM',
        subtitle: 'Mofakham-el-Soltan',
        generation: 4,
        relations: [{ source: 'Satereh Khanoom', target: '_self', relationship: 'son' }],
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
const combined = [
    ...family,
    ...generation_4,
];
console.log('combined', combined);

export const familyData: any = combined;