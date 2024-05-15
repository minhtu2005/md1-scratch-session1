const greetingWithWeather = (name, weather) => {
    let greeting;
    
    if (weather === "sunny") {
        greeting = `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather === "rainy") {
        greeting = `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
        greeting = `Chào ${name}! Hôm nay thời tiết không xác định.`;
    }
    
    return greeting;
};
console.log(greetingWithWeather("Minh", "sunny")); 
console.log(greetingWithWeather("Lan", "rainy")); 
console.log(greetingWithWeather("Hùng", "cloudy"));