import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import Select from 'react-select';

const Domisili = ({formData,setFormData}) => {
  const [provinsiOptions, setProvinsiOptions] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [kabupatenOptions, setKabupatenOptions] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [kecamatanOptions, setKecamatanOptions] = useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState('');
  const [desaOptions, setDesaOptions] = useState([]);
const [selectedDesa, setSelectedDesa] = useState('');


  useEffect(() => {
    fetch('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((provinces) => {
        const options = provinces.map((provinsi) => ({
          value: provinsi.id,
          label: provinsi.name,
        }));
        setProvinsiOptions(options);
        
      });
  }, []);

  const handleProvinsiChange = (selectedOption) => {
    setSelectedProvinsi(selectedOption);
    setSelectedKabupaten('');
    setSelectedKecamatan('');
    // Mendapatkan kabupaten berdasarkan id provinsi yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((regencies) => {
        const options = regencies.map((kabupaten) => ({
          value: kabupaten.id,
          label: kabupaten.name,
        }));
        setKabupatenOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          provinsi: selectedOption.label,
          kota: '',
          kecamatan: '',
          desa: '',
        }));
      });
  };

  const handleKabupatenChange = (selectedOption) => {
    setSelectedKabupaten(selectedOption);
    setSelectedKecamatan('');
    // Mendapatkan kecamatan berdasarkan id kabupaten yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((districts) => {
        const options = districts.map((kecamatan) => ({
          value: kecamatan.id,
          label: kecamatan.name,
        }));
        setKecamatanOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          kota: selectedOption.label,
          kecamatan: '',
          desa: '',
        }));
      });
  };

  const handleKecamatanChange = (selectedOption) => {
    setSelectedKecamatan(selectedOption);
    // Mendapatkan desa berdasarkan id kecamatan yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((villages) => {
        const options = villages.map((desa) => ({
          value: desa.id,
          label: desa.name,
        }));
        setDesaOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          kecamatan: selectedOption.label,
          desa: '',
        }));
      });
  };
  const handleDesaChange = (selectedOption) => {
    setSelectedDesa(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      desa: selectedOption.label,
    }));
  };
  // console.log(formData);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      backgroundColor:'white'
    }),
  };
  return (
    <div className='w-full flex flex-col items-center gap-5'>
      <Select
       className='w-full rounded-lg bg-white z-40'
        options={provinsiOptions}
        value={selectedProvinsi}
        onChange={handleProvinsiChange}
                styles={customStyles}

        placeholder='Pilih Provinsi'
      />
      <Select
       className='w-full rounded-lg bg-white z-30'
        options={kabupatenOptions}
        value={selectedKabupaten}
        onChange={handleKabupatenChange}
                styles={customStyles}

        placeholder='Pilih Kabupaten'
      />
      <Select
       className='w-full rounded-lg bg-white z-20'
        options={kecamatanOptions}value={selectedKecamatan}
        onChange={handleKecamatanChange}
                styles={customStyles}

        placeholder='Pilih Kecamatan'
      />
      <Select
       className='w-full rounded-lg bg-white z-10'
  options={desaOptions}
  value={selectedDesa}
  onChange={handleDesaChange}
          styles={customStyles}

  placeholder='Pilih Desa'
/>

    </div>
  );
};

export default Domisili;

