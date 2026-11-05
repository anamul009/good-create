# Regenerates the social share images in public/og/ (run from site/: python scripts/make-og.py). Needs Pillow + Yu Gothic (Windows).
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, sys
W,H=1200,630
def bg():
    im=Image.new('RGB',(W,H),'#071226')
    glow=Image.new('L',(W,H),0); d=ImageDraw.Draw(glow)
    for r in range(700,0,-10): d.ellipse((900-r,200-r,900+r,200+r),fill=int(120*(1-r/700)))
    glow=glow.filter(ImageFilter.GaussianBlur(40))
    im=Image.composite(Image.new('RGB',(W,H),'#1b3a70'),im,glow)
    d=ImageDraw.Draw(im)
    for x in range(0,W,24):
        for y in range(0,H,24): d.point((x+2,y+2),fill='#1a2a48')
    return im
def mesh(im,cx,cy,r):
    d=ImageDraw.Draw(im,'RGBA')
    pts=[(cx+r*math.cos(math.radians(a)),cy+r*math.sin(math.radians(a))) for a in range(-90,270,60)]
    for i in range(6):
        for j in (i+1,i+2): d.line([pts[i],pts[j%6]],fill=(159,180,232,60),width=2)
        d.line([pts[i],(cx,cy)],fill=(255,61,154,170),width=3)
    glow=Image.new('RGBA',(W,H),(0,0,0,0)); g=ImageDraw.Draw(glow)
    g.ellipse((cx-110,cy-110,cx+110,cy+110),fill=(255,61,154,80)); glow=glow.filter(ImageFilter.GaussianBlur(45))
    im.paste(glow,(0,0),glow); d=ImageDraw.Draw(im,'RGBA')
    for (x,y) in pts:
        d.ellipse((x-30,y-30,x+30,y+30),fill='#0c1d3d',outline=(255,255,255,50),width=2)
        d.rounded_rectangle((x-9,y-15,x+9,y+15),radius=4,outline='#dbe5ff',width=3)
    d.rounded_rectangle((cx-48,cy-84,cx+48,cy+84),radius=18,fill='#0a1730',outline='#ff3d9a',width=4)
    d.rounded_rectangle((cx-38,cy-72,cx+38,cy+72),radius=10,fill='#13284f')
    d.arc((cx-14,cy-30,cx+14,cy-2),180,360,fill='white',width=5)
    d.line((cx-14,cy-16,cx-14,cy-6),fill='white',width=5); d.line((cx+14,cy-16,cx+14,cy-6),fill='white',width=5)
    d.rounded_rectangle((cx-21,cy-8,cx+21,cy+24),radius=7,fill='#e0007f')
    d.ellipse((cx-4,cy+2,cx+4,cy+10),fill='white')
logo=Image.open('src/assets/brand/goodcreate-white.png'); logo=logo.resize((int(487*0.62),int(126*0.62)),Image.LANCZOS)
F='C:/Windows/Fonts/'
def make(name,l1,l2,sub,size):
    im=bg(); mesh(im,950,330,185); im.paste(logo,(80,70),logo)
    d=ImageDraw.Draw(im)
    fb=ImageFont.truetype(F+'YuGothB.ttc',size); fr=ImageFont.truetype(F+'YuGothM.ttc',28)
    d.text((80,215),l1,font=fb,fill='white'); d.text((80,215+int(size*1.25)),l2,font=fb,fill='#ff5cb0')
    d.rectangle((80,470,140,474),fill='#e0007f'); d.text((80,495),sub,font=fr,fill='#b8c4dc')
    d.text((80,555),'gc-c.co.jp',font=ImageFont.truetype(F+'YuGothB.ttc',24),fill='#7d8db3')
    im.save(f'public/og/{name}.png',optimize=True)
make('ja','信頼をつなぎ、','未来を守る。','Web3.0時代の信頼インフラ ／ 特許技術 @POP',78)
make('en','Connecting trust.','Protecting the future.','Trust infrastructure for the Web3.0 era · Patented @POP',58)
