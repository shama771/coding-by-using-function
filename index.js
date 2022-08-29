// step1 : order pizza
// step2 : accept order
// step3 : prepare dought
// step4 : start cuttings
// step5 : put topings
// step6 : Bake it 
// step7 : pack it 
// step8 : out for delivery 
// step9 : order picked 
// step10: pizza delivered to customer



function OrderPizza(){
    console.log("order pizza")
    setTimeout(AcceptOrder,2000)
}

function AcceptOrder(){
    console.log("order accepted")
    setTimeout(PrepareDought,2000)
}
function PrepareDought(){
    console.log("Preparing Dought")
    setTimeout(StartCuttings,9000)
}
function StartCuttings(){
    console.log("Started Cuttings")
    setTimeout(PutTopings,2000)
}
function PutTopings(){
    console.log("Add on Topings!!!")
    setTimeout(BakeIt,2000)
}
function BakeIt(){
    console.log("Baking It Yummy")
    setTimeout(PackIt,7000)
}
function PackIt(){
    console.log("Packing It Go green save nature")
    setTimeout( OrderPicked,1700)
}
function OrderPicked(){
    console.log("Order Picked by delivery excutive")
    setTimeout(PizzDelivered,8000)
}
function PizzDelivered(){
    console.log("Pizz Delivered to customer location")
}
setTimeout(OrderPizza,3000)