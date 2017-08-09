Device("Device").App("Advantage Shopping").MobileLabel("LAPTOPS").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 2,0
Device("Device").App("Advantage Shopping").MobileButton("ColorButtonLabel").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 0,0
Device("Device").App("Advantage Shopping").MobileButton("quantityButtonLabel").Tap
Device("Device").App("Advantage Shopping").MobileButton("Plus").Tap
Device("Device").App("Advantage Shopping").MobileButton("APPLY").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileButton("Ok").Tap
Device("Device").App("Advantage Shopping").MobileEdit("userNameLabel").Check CheckPoint("userNameLabel")
Device("Device").App("Advantage Shopping").MobileEdit("passwordLabel").Check CheckPoint("passwordLabel")
Device("Device").App("Advantage Shopping").MobileButton("SIGN IN WITH FACEBOOK").Check CheckPoint("SIGN IN WITH FACEBOOK")
Device("Device").App("Advantage Shopping").MobileButton("Menu").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList_2").Select 1,0

