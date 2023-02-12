let textResult = document.getElementById("result")
let boxitem1 = document.getElementById("boxitem-1")
let boxitem2 = document.getElementById("boxitem-2")


function calculatePrice() {
    let qrt1 = document.getElementById("qrt1").value
    let qrt2 = document.getElementById("qrt2").value
    let price1 = document.getElementById("price1").value
    let price2 = document.getElementById("price2").value
    

    if (qrt1 && qrt2 && price1 && price2 !="") {

        textResult.className = "bg-hidden"
        textResult.innerText = ""
        let result1 = (price1/qrt1).toFixed(4)
        let result2 = (price2/qrt2).toFixed(4)
        console.log(result1);
        console.log(result2);


        if (result1 > result2) {
            textResult.innerText = "สินค้าชิ้นที่ 2 ถูกกว่า " + (((result2-result1)*100/result1)*-1).toFixed(2) +"%"
            textResult.className = "bg-hidden"
            boxitem1.className = "bg-hidden"
            boxitem2.className = "alert alert-success"
            
    
        } else if (result2 > result1) {
            textResult.innerText = "สินค้าชิ้นที่ 1 ถูกกว่า " + (((result1-result2)*100/result2)*-1).toFixed(2) +"%"
            textResult.className = "bg-hidden"
            boxitem2.className = "bg-hidden"
            boxitem1.className = "alert alert-success"
    
    
    
        } else if (result2 == result1) {
            textResult.innerText = "สินค้าชิ้นที่ 1 และชิ้นที่ 2 ราคาไม่แตกต่างกัน"
            boxitem1.className = "bg-hidden"
            boxitem2.className = "bg-hidden"
            textResult.className = "alert alert-warning"
        }

    } else {
        textResult.innerText = "กรุณา...ใส่ข้อมูลให้ถูกต้องและครบถ้วน !!"
        boxitem1.className = "bg-hidden"
        boxitem2.className = "bg-hidden"
        textResult.className = "alert alert-danger"
    }
}

