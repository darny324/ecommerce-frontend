

const Contact = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row justify-center mt-8 gap-8">
      <div>
        <h1>Contact Us</h1>
        <p className="text-lg text-gray-500">Address: Pazun Taung Road No.7</p>
        <p className="text-lg text-gray-500">Email: example@gmail.com</p>
        <p className="text-lg text-gray-500">Phone no: +959-732-292-112</p>
        <p className="text-lg text-gray-500">Facebook page: www.facebook.com/ourpage</p>
      </div>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15279.908014296565!2d96.16662908007156!3d16.777819688563934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecf47b4a016b%3A0x370cdda555ca0295!2sPazundaung%2C%20Yangon!5e0!3m2!1sen!2smm!4v1739605681239!5m2!1sen!2smm" 
      className="border-0 rounded-md w-[20rem] h-[16rem] md:w-[26rem] md:h-[20rem]" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact