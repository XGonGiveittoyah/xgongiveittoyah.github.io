function calc() {
    var rate;
    var freq;
    var hours;

    rate = document.getElementById("rate").value;
    freq = document.getElementById("freq").value;
    hours = document.getElementById("hours").value;

    var result = ((rate * hours) / 16) / freq; 
    
    document.getElementById("tuitionwasted").innerHTML = "$" + result;
}