function contemplateDiscount(){
    let budget = document.getElementById("budget").value
    let discounted = budget * .2;

    document.getElementById("discount").innerHTML = '<div class="container p-5 bg-light text-dark"> <h5>Recommended Brands:</h5> <div class="text-center mt-3"> <button type="button" onclick="window.location.href='https://www.epson.com.ph'">EPSON</button> <button type="button" onclick="window.location.href='https://www.brother.com.ph/en'">Brother</button> <button type="button" onclick="window.location.href='https://ph.canon/en/consumer'">Canon</button> <button type="button" onclick="window.location.href='https://www.hp.com/ph-en/home.html'">HP</button> <h5>Eligible discount:</h5> <button type="button" class=" btn btn-primary">6,700</button> </div>
    ';
}

function seeLocations(){
    document.getElementById("discount").innerHTML = '<div class="container p-5 bg-light text-dark"> <h2>Branches</h2> <p>OBMC Eisenhower Street, Greenhills, San Juan</p> <p>Happyland, Tondo, Manila</p> </div>';
    
}
