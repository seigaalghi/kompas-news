"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        authorId: 1,
        body:
          "Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara. Sesampainya di anjong (segitiga penyeimbang) yang berada di bagian depan kapal, mereka bergantian melompat. Byur, byur, prakk suara tubuh bertemu dengan air laut, susul menyusul. Sementara buruh bongkar muat di sebelahnya terus bekerja, mengangkut muatan, memindahkan barang dari truk ke kapal.",
        title: "Suatu Sore di Pelabuhan Sunda Kelapa",
        image: "1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        body:
          "Kabar rencana merger antara Gojek dan Grab serta Gojek dan Tokopedia menarik dicermati karena melibatkan dana yang sangat besar dan dapat mengubah dominasi bisnis berbasis daring.",
        title: "Gosip Merger Perusahaan Teknologi di Sekitar Kita",
        image: "2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 3,
        body:
          "Sebanyak 4.300 mahasiswa Universitas Lampung akan mengikuti kegiatan Kuliah Kerja Nyata (KKN) tatap muka mulai 26 Januari 2021. Sebelum diterjunkan ke desa-desa, para mahasiswa itu wajib menjalani tes cepat Covid-19.",
        title: "Universitas Lampung KKN Tatap Muka, 4.300 Mahasiswa Wajib Tes Cepat",
        image: "3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 1,
        body:
          "Meski memiliki modal penguasaan hingga dua pertiga wilayah di Sumbar dalam Pemilu 2019, mesin partai dari Gerindra kesulitan untuk mengulang dominasi serupa dalam Pilkada 2020.",
        title: "Kisah Berulang Penguasaan Partai di Sumatera Barat",
        image: "4.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        body:
          "Inspektur Jenderal M Fadil Imran meminta para pejabat baru segera melakukan langkah-langkah taktis yang tidak tanggung-tanggung di lapangan guna turut mengendalikan wabah Covid-19.",
        title: "Kapolda Metro Jaya Beri Tugas Penanganan Covid-19 kepada 15 Pejabat Baru",
        image: "5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
