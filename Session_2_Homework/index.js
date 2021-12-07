const app = document.getElementById('app');
const a = new Faq('What kind of payment do you support ?', 'We support credit card, Paypal and Stripe.');
const b = new Faq('Do you support free dilivery ?', 'We support free delivery in HCM City, HaNoi and Da Nang.');
const c = new Faq('Whats your warranty policy ?', 'If damage occurs. You will be able to renew the product within 1 monthOur product will be replaced within 2 months.')


const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'FAQ?'

app.appendChild(title);
app.appendChild(a.render());
app.appendChild(b.render());
app.appendChild(c.render());