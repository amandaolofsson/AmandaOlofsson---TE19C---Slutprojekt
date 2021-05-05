document.getElementById("form1").onsubmit=function(){
    height = parseInt(document.querySelector('input[name = "height"]:checked').value)
    sport = parseInt(document.querySelector('input[name = "height"]:checked').value)
    date = parseInt(document.querySelector('input[name = "date"]:checked').value)
    place = parseInt(document.querySelector('input[name = "place"]:checked').value)
    fish = parseInt(document.querySelector('input[name = "fish"]:checked').value)
    scent = parseInt(document.querySelector('input[name = "scent"]:checked').value)
    dish = parseInt(document.querySelector('input[name = "dish"]:checked').value)
    flowers = parseInt(document.querySelector('input[name = "flowers"]:checked').value)
    quote = parseInt(document.querySelector('input[name = "quote"]:checked').value)
    sandwichToppings = parseInt(document.querySelector('input[name = "sandwichToppings"]:checked').value)

    total = height + sport + date + place + fish + scent + dish + flowers + quote + sandwichToppings;

    document.getElementById("answer2").innerHTML = total;

    switch(total){
        case (total<11):
            document.getElementById("answer2").innerHTML = "You are an Ostfralla from Hemköp. Just like Elis, you are sweet and cute. There are many like you, but it doesn’t matter; people like you anyway";
            break;
        case (total >= 11 && total < 21):
            document.getElementById("answer2").innerHTML = "You are a Bagel. Short and round, but with lots of content. You are a bit of a hippie, and a loner";
            break;
        case (total >= 21 && total < 31):
            document.getElementById("answer2").innerHTML = "You are a Baguette. French, tall and sticklike. Kinda crusty and people tend to throw you away after a day or two. However, it doesn’t bother your fancy ass"
            break;
        case (total >= 31 && total < 41):
            document.getElementById("answer2").innerHTML = "You are Ciabatta bread. Italian and white. You are a delicious delicatess, and prefer fancy dinners"
            break;
        case (total >= 41 && total < 51):
            document.getElementById("answer2").innerHTML = "You are Toast bread. White and extremely basic. People tend to seek more exotic breads, but you are always there to fall back to. A really reliable one"
            break;
        case (total >= 51 && total < 61):
            document.getElementById("answer2").innerHTML = "You are Sourdough. Soft but sour. Older people tend to like you more. Be careful with those air bubbles"
            break;
        case (total >= 61 && total < 71):
            document.getElementById("answer2").innerHTML = "You are a Lingongrova. Not liked by many, especially not your crust. You are dark and hang out in schools with the kids"
            break;
        case (total >= 71 && total < 81):
            document.getElementById("answer2").innerHTML = "You are Crispbread. From the nordic countries, dry and lonely. Kids hate you, older people hate you. Only healthy people like you"
            break;
    }

    return false;
}