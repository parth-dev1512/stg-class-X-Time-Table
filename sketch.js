var sub;
var database;
var id;
var pass;
var link;
var hour, min, day, d;
var button;
var subject;
var button_hindi, button_art, button_bio, button_chem,  button_comp, button_cst, button_eco, button_eng1, button_eng2, button_geo, button_his, button_maths, button_phy;


function setup() {
  createCanvas(screen.width,screen.height);
  //createSprite(400, 200, 50, 50);

  
  button_eng2 = createButton("https://us04web.zoom.us/j/6129594166?pwd=VThLaWhyWjZoZG1IN3RJTXkwNlRqUT09");
  button_geo = createButton("https://us04web.zoom.us/j/7825570991?pwd=NmNqQXRLazlxMWtDNDJnMXVJVzlNUT09\"");
  button_maths = createButton("https://us04web.zoom.us/j/4332273334?pwd=R1Fydlhmcjc2VzJGS2ZnSEM3TC90UT09");
  button_phy = createButton("https://us04web.zoom.us/j/4058835403?pwd=VkhyQ1JMazByMkYzZ010S0FWM0VTZz09");
  button_chem = createButton("https://us04web.zoom.us/j/8727030584?pwd=WjBjQWJtMWM1NXltNENFMEJ4eGNQQT09");
  button_bio = createButton("https://us04web.zoom.us/j/5529059117?pwd=WWNoNGljR2ZIMHNaSDhEWXdEdjEvdz09");
  button_his = createButton("https://us05web.zoom.us/j/3862060151?pwd=M3ppeHJ3RXAxNGtkSFN2SWNlRHRRQT09");
  button_hindi = createButton("https://us04web.zoom.us/j/2517635465?pwd=eDlJaW9sYTBwMXpVVTJ1VU5kZlR3QT09");
  button_eng1 = createButton("https://us04web.zoom.us/j/3961375730?pwd=N3pUbTVENUN2TFJLQ3Y3WTl3bCtGUT09");
  button_comp = createButton("https://us04web.zoom.us/j/9978372164?pwd=dmUzM2c3czg0WVBiWGxidVlNZlJUQT09");
  button_art = createButton("https://us04web.zoom.us/j/2287852646?pwd=cEpUdFRSR1RKanNETGxEN0lGb0I1UT09");
  button_cst = createButton("https://us05web.zoom.us/j/5733949734?pwd=M1pYSjVaSSsyQWZhT2Z0L29DTVBHUT09");
  button_eco = createButton("https://us04web.zoom.us/j/6129594166?pwd=VThLaWhyWjZoZG1IN3RJTXkwNlRqUT09");
  button_ass = createButton("https://us04web.zoom.us/j/8941362320?pwd=ZVFIb0pzcllEUmlKUTNXQmhSNVdqQT09")


  button_hindi.hide();
  button_art.hide();
  button_bio.hide();
  button_chem.hide();
  button_comp.hide();
  button_cst.hide();
  button_eco.hide();
  button_eng1.hide();
  button_eng2.hide();
  button_geo.hide();
  button_his.hide();
  button_maths.hide();
  button_phy.hide();
  button_ass.hide();


  subject =new Subjects();
  nextsub = new NextSubject();
}


function time()
{
  
}

function draw() {
  background(255,255,255);  
  
  //createSprite(width/2,height/2,50,50)
  var d = new Date();
  
  day=d.getDay();

  hour=d.getHours();

  min=d.getMinutes();



  setInterval(d,100);
  setInterval(day,100);
  setInterval(hour,100);
  setInterval(min,100);
  
  //console.log(hour)
  
  

  if(day===0)
  {
    textSize(20);
        fill("black");
    text("It's Sunday!!!",(screen.width)/2,(screen.height)/2);
   
  }

  else if(day===1)
  {
    if(hour<08)
    {
      nextsub.eng1();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.eng1();
      }
      else if(min>=15 && min<56)
      {
        subject.eng1();

      }
      else
      {
        nextsub.eng2();
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
        subject.eng2();
      }
      else{
        nextsub.geo();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.geo();
      }
      else{
        nextsub.maths();
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        subject.maths();
      }
      else if(min>40 && min<50)
      {
        nextsub.phy_11();
        nextsub.cst_11();
      }
      else{
        subject.phy();
        subject.cst();
      }
    }
    else if(hour>=12 && hour<13)
    {
      if(min>=00 && min<31)
      {
        subject.phy();
        subject.cst();
      }
      else{
        text("Today's classes are over",width/2,height/2);
      }
    }
    else
    {
      text("Today's Classes are over",width/2,height/2);
    }
    
  }

  
  else if(day===2)
  {
    if(hour<08)
    {
      nextsub.phy_8();
      nextsub.cst_8();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.phy_8();
        nextsub.cst_8();
      }
      else if(min>=15 && min<56)
      {
        subject.phy();
        subject.cst();

      }
      else
      {
         textSize(20);
        fill("black");
        text("Next Period is free",width/2,height/2)
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
         textSize(20);
        fill("black");
        text("This period is free",width/2,height/2)
      }
      else{
        nextsub.hindi();

        nextsub.ass();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.hindi();
        subject.ass();
      }
      else{
        nextsub.maths();
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        subject.maths();
      }
      else if(min>40 && min<50)
      {
        nextsub.chem();
        nextsub.eco_11();

      }
      else{
        subject.chem();
        subject.eco();
      }
    }
    else if(hour>=12 && hour<13)
    {
      if(min>=00 && min<31)
      {
        subject.chem();
        subject.eco_11();
      }
      else{
        text("Today's classes are over",width/2,height/2)
      }
    }
    else
    {
      text("Today's Classes are over",width/2,height/2);
    }
  }


  else if(day===3)
  {
    if(hour<08)
    {
      nextsub.comp();
      nextsub.art();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.comp();
        nextsub.art();
      }
      else if(min>=15 && min<56)
      {
        subject.comp();
        subject.art();

      }
      else
      {
        nextsub.his_9();
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
        subject.his();
      }
      else{
        nextsub.bio_10();
        nextsub.cst_10();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.bio();
        subject.cst();
      }
      else{
        nextsub.maths();
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        subject.maths();
      }
      else if(min>40 && min<50)
      {
        nextsub.chem();
        nextsub.eco_11();
      }
      else{
        subject.chem();
        subject.eco();
      }
    }
    else if(hour>=12 && hour<13)
    {
      if(min>=00 && min<31)
      {
        subject.chem();
        subject.eco();
      }
      else{
        fill("black");
        textSize(20)
        text("Today's classes are over",width/2,height/2)
      }
    }
    else
    {
      fill("black");
        textSize(20)
      text("Today's classes are over",width/2,height/2)
    }
    
  }

  else if(day===4)
  {
    if(hour<08)
    {
      nextsub.comp();
      nextsub.art();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.comp();
        nextsub.art();
      }
      else if(min>=15 && min<56)
      {
        subject.comp();
        subject.art();

      }
      else
      {
        nextsub.eng2();
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
        subject.eng2();
      }
      else{
        nextsub.his_10();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.his();
      }
      else{
        nextsub.maths();
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        subject.maths();
      }
      else{
        fill("black");
        textSize(20)
        text("Classes over for today")      }
    }
    
    else
    {
      fill("black");
        textSize(20)
      text("Today's classes are over",width/2,height/2)
    }
    
  }

  else if(day===5)
  {
    if(hour<08)
    {
      nextsub.cst_8();
      nextsub.phy_8();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.phy_8();
        nextsub.cst_8();
      }
      else if(min>=15 && min<56)
      {
        subject.phy();
        subject.cst();

      }
      else
      {
        nextsub.bio_9();
        nextsub.eco_9();
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
        subject.bio();
        subject.eco();
      }
      else{
        nextsub.hindi();
        nextsub.ass();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.hindi();
        subject.ass();
      }
      else{
        fill("black");
        textSize(20)
        text("Next class starts from 11:50");
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        fill("black");
        textSize(20)
        text("This period is free");
      }
      else if(min>40 && min<50)
      {
        nextsub.chem();
        nextsub.eco_11();
      }
      else{
        subject.chem();
        subject.eco();
      }
    }
    else if(hour>=12 && hour<13)
    {
      if(min>=00 && min<31)
      {
        subject.chem();
        subject.eco_11();
      }
      else{
        fill("black");
        textSize(20)
        text("Today's classes are over",width/2,height/2)
      }
    }
    else
    {
      fill("black");
        textSize(20)
      text("Today's Classes are over",width/2,height/2);
    }
  }

  else
  {
    if(hour<08)
    {
      nextsub.eng1();
    }

    else if(hour>=08 && hour<09)
    {
      if(min<15)
      {
        nextsub.eng1();
      }
      else if(min>=15 && min<56)
      {
        subject.eng1();

      }
      else
      {
        nextsub.eng2();
      }
    }

    else if(hour>=09 && hour<10)
    {
      if(min>=00 && min<41)
      {
        subject.eng2();
      }
      else{
        nextsub.geo();
      }
    }
    else if(hour>=10 && hour<11)
    {
      if(min>=00 && min<41)
      {
        subject.geo();
      }
      else{
        nextsub.his_11();
      }
    }

    else if(hour>=11 && hour<12)
    {
      if(min>=00 && min<41)
      {
        sub.his();
      }
      else{
      
        fill("black");
        textSize(20)
        text("Today's classes are over",width/2,height/2)
      }
    }
    
    else
    {
      fill("black");
        textSize(20)
      text("Today's Classes are over",width/2,height/2);
    }
  }

  again();

  drawSprites();
}

function again()
{
  redraw(5);
}
