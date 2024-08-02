import emailjs from '@emailjs/browser';

const EmailPublicKey = 'nhQdtl_U9Tf1x0OdD';
const ServiceId = 'service_qtmkh0s';
const TemplateID = 'template_6ladw7d';

function sendEmail(FormRef: any) {
  emailjs.sendForm(ServiceId, TemplateID, FormRef, EmailPublicKey)
}

export { sendEmail };
