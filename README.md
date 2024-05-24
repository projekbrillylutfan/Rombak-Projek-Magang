# Rombak-Projek-Magang

# ERD Version (1.0.0) :

## ENTITAS:

1. Bupati
   - ID Bupati (Primary Key)
   - Nama
   - Periode Jabatan

2. Agenda
   - ID Agenda (Primary Key)
   - ID Bupati (Foreign Key)
   - Nama Agenda
   - Deskripsi
   - ID Lokasi (Foreign Key)
   - ID Jenis Acara (Foreign Key)
   - Tanggal Mulai
   - Tanggal Selesai

3. Lokasi
   - ID Lokasi (Primary Key)
   - Nama Lokasi
   - Alamat

4. Peserta
   - ID Peserta (Primary Key)
   - Nama
   - Jabatan
   - Instansi

5. Jenis Acara
   - ID Jenis Acara (Primary Key)
   - Nama Jenis Acara

6. Waktu
   - ID Waktu (Primary Key)
   - ID Agenda (Foreign Key)
   - Tanggal
   - Jam Mulai
   - Jam Selesai

7. Agenda_Peserta
   - ID Agenda (Foreign Key)
   - ID Peserta (Foreign Key)

RELASI:

1. Bupati dapat memiliki banyak agenda.
2. Setiap agenda berlangsung di satu lokasi, tetapi satu lokasi dapat digunakan untuk banyak agenda.
3. Setiap agenda memiliki satu jenis acara, tetapi satu jenis acara dapat digunakan untuk banyak agenda.
4. Agenda dapat melibatkan banyak peserta, dan peserta dapat menghadiri banyak agenda.
5. Setiap agenda memiliki detail waktu yang spesifik.


