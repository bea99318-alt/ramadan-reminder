const reminders =[
    "اللهم تقبل منا الصيام و القيام",
    "اللهم ارزقنا راحه البال",
    "سبحان الله و بحمده",
    "لا اله الا انت سبحانك اني كنت من الظالمين",
    "استغفر الله و اتوب اليه",
    "لا تنس قراءة وردك من القرآن",
    "اللهم اغفر لنا ذنوبنا"

];
function showreminder(){
    const randomIndex = Math.floor(Math.random() * reminders.length);
    document.getElementById("reminder").innerText =reminders[randomIndex];
}