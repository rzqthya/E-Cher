const datas = [
    {
        id: 1,
        date: "29 Oktober 2023",
        title:
            "Burger King Cash Back Hingga 50%",
        desc: "All Outlet Burger King",
        image:
            require('./assets/voucher/BurgerKing_promo1.jpg'),
        city: "Semarang",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 2,
        date: "28 Februari 2023",
        title: "Voucher Diskon Rp 15.000",
        desc: "Khusus Outlet Jawa Tengah",
        image:
            require('./assets/voucher/BurgerKing_Promo2.jpg'),
        city: "DIY Yogyakarta",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 3,
        date: "31 November 2023",
        title:
            "Voucher Diskon Rp 20.000",
        desc: "Khusus Siswa dan Mahasiswa",
        image:
            require('./assets/voucher/Chatime1.jpg'),
        city: "Solo",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 4,
        date: "16 Mei 2023",
        title: "THR Dari Kenangan Beli 3 Hanya 48 Ribu",
        desc: "Khusus Siswa dan Mahasiswa",
        image:
            require('./assets/voucher/Chatime2.jpg'),
        city: "Boyolali",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 5,
        date: "16 Mei 2023",
        title:
            "Cashback 60%",
        desc: "Untuk Pengguna GoPay",
        image:
            require('./assets/voucher/dcost-promo.jpg'),
        city: "Banyumas",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 6,
        date: "10 Desember 2023",
        title:
            "Diskon Nasi Lemak McD",
        desc: "Promo Akhir Tahun",
        image:
            require('./assets/voucher/Gildak_1.jpg'),
        city: "Blora",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 7,
        date: "Setiap Hari 22.00",
        title: "Diskon Kopi",
        desc: "All Days",
        image:
            require('./assets/voucher/kopikenangan_1.jpg'),
        city: "Brebes",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 8,
        date: "31 Oktober 2023",
        title:
            "Promo Oktober Xtra Puas",
        desc: "Khusus siswa dan mahasiswa",
        image:
            require('./assets/voucher/kopikenangan_2.jpg'),
        city: "Cilacap",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 9,
        date: "7 Juli 2023",
        title: "Voucher Belanja Chatime",
        desc: "Promo 7.7 untuk pembelian melalui Ovo",
        image:
            require('./assets/voucher/Martabakku1.jpg'),
        city: "Demak",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
    {
        id: 10,
        date: "20 Desember 2023",
        title:
            "Cashback 35% MartabakKu",
        desc: "Promo Akhir Tahun",
        image:
            require('./assets/voucher/McD1.jpg'),
        city: "Kebumen",
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sk: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.'
    },
];

export default datas;