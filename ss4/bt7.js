let phoneBooks = [];
const addContact = (name, phoneNumber, email) => {
    const contact = { name, phoneNumber, email };
    phoneBooks.push(contact);
    console.log(`Liên hệ "${name}" đã được thêm vào danh bạ.`);
};
const displayContact = () => {
    console.log("Danh bạ điện thoại:");
    if (phoneBooks.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        phoneBooks.forEach((contact, index) => {
            console.log(`#${index + 1}:`);
            console.log(`Tên: ${contact.name}`);
            console.log(`Số điện thoại: ${contact.phoneNumber}`);
            console.log(`Email: ${contact.email}`);
        });
    }
};
addContact("John Doe", "123456789", "john@example.com");
addContact("Jane Smith", "987654321", "jane@example.com");
displayContact();