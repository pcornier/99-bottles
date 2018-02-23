
## Language HLSL (High Level Shading Language) ##
---
- Author: Floste
- Date: 03/27/10
- Info: http
- Score:  (3.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hlsl-(high-level-shading-language)-2345.html
---

```////////////////////////////////////////////////////////////////////////////////////
//This is a HLSL-shader, wich outputs the "99 bottles of beer"-song. The generation of the songtext
is done within the pixelshader.
//It needs an ansi sprite-Font assigned to FontTexture to work, because ther is no builtin support
for text rendering.
//Because the Songtext is a bit too long to fit into one screen,
//this shader automatically scrolls down looping the songtext if you assign the current time in
seconds to "time" and render frequently.
//NVIDIA Fx Composer, wich i used for creating this, automatically does this.
////////////////////////////////////////////////////////////////////////////////////
//Autor: Floste
//Date: 27.3.2010
////////////////////////////////////////////////////////////////////////////////////

struct VS_OUT
{
	float4 Pos:POSITION;
	float4 Tex:TEXCOORD0;
};

//sprite font: ansi chars in a 16x16 matrix i use:
http://www.imagebanana.com/view/fr5xg1w/SpriteFont.png
Texture2D FontTexture;
//time in seconds
float time:animationtime;

sampler FontSampler=
sampler_state
{
    Filter = MIN_MAG_MIP_LINEAR;
    AddressU = Clamp;
    AddressV = Clamp;
	Texture=<FontTexture>;
};

const float numLines=40;
const float numCols=100;

VS_OUT BeerVertexShader(float2 Tex:TEXCOORD0)
{
	VS_OUT result;
	result.Pos=float4(Tex.x*2-1,Tex.y*2-1,0,1);
	result.Tex=float4(Tex,Tex);
	result.Tex.y-=(time/10.0);
	return result;
}

//strings represented by arrays of ansi chars:

//" bottles of beer on the wall, ":
#define num_p1 30
const float
p1[num_p1]={(32.0),(98.0),(111.0),(116.0),(116.0),(108.0),(101.0),(115.0),(32.0),(111.0),(102.0),(32.0),(98.0),(101.0),(101.0),(114.0),(32.0),(111.0),(110.0),(32.0),(116.0),(104.0),(101.0),(32.0),(119.0),(97.0),(108.0),(108.0),(44.0),(32.0)};

//" bottles of beer.":
#define num_p2 17
const float
p2[num_p2]={(32.0),(98.0),(111.0),(116.0),(116.0),(108.0),(101.0),(115.0),(32.0),(111.0),(102.0),(32.0),(98.0),(101.0),(101.0),(114.0),(46.0)};

//"Take one down and pass it around, ":
#define num_p3 34
const float
p3[num_p3]={(84.0),(97.0),(107.0),(101.0),(32.0),(111.0),(110.0),(101.0),(32.0),(100.0),(111.0),(119.0),(110.0),(32.0),(97.0),(110.0),(100.0),(32.0),(112.0),(97.0),(115.0),(115.0),(32.0),(105.0),(116.0),(32.0),(97.0),(114.0),(111.0),(117.0),(110.0),(100.0),(44.0),(32.0)};

//" bottles of beer on the wall.":
#define num_p4 29
const float
p4[num_p4]={(32.0),(98.0),(111.0),(116.0),(116.0),(108.0),(101.0),(115.0),(32.0),(111.0),(102.0),(32.0),(98.0),(101.0),(101.0),(114.0),(32.0),(111.0),(110.0),(32.0),(116.0),(104.0),(101.0),(32.0),(119.0),(97.0),(108.0),(108.0),(46.0)};

#define num_p5 66
const float
p5[num_p5]={(71.0),(111.0),(32.0),(116.0),(111.0),(32.0),(116.0),(104.0),(101.0),(32.0),(115.0),(116.0),(111.0),(114.0),(101.0),(32.0),(97.0),(110.0),(100.0),(32.0),(98.0),(117.0),(121.0),(32.0),(115.0),(111.0),(109.0),(101.0),(32.0),(109.0),(111.0),(114.0),(101.0),(44.0),(32.0),(57.0),(57.0),(32.0),(98.0),(111.0),(116.0),(116.0),(108.0),(101.0),(115.0),(32.0),(111.0),(102.0),(32.0),(98.0),(101.0),(101.0),(114.0),(32.0),(111.0),(110.0),(32.0),(116.0),(104.0),(101.0),(32.0),(119.0),(97.0),(108.0),(108.0),(46.0)};


//"no more":
#define num_noMore 7
const float noMore[num_noMore]={(78.0),(111.0),(32.0),(109.0),(111.0),(114.0),(101.0)};

float digit1(float num)
{
	return trunc(num/10)+48;
}

float digit2(float num)
{
	return (num%10)+48;
}

//gets the char at the specified location
float GetCharAt(float x,float y)
{
	y=round(y%300);//repeat every 300 lines
	int number=round(99-trunc((y+2)/3.0));//the number of bottles in the current line.
	float paragraphLine=round(y%3);//every paragraph has 3 lines. y%3 returns 0,1,2,0,1,2,1,...
	int i=round(x);
	
	//the following part emulates concatinating strings without using any dynamic or writeable
buffers.
	//test wether i is within the current part and if not subtract the length of the current part and
do the same with the next part. 
	if(number<0)//the last line and the space after
	{
		if(paragraphLine==1&&number==-1&&i<num_p5)
		{
			return p5[i];
		}
	    return 32;
	}
	if(paragraphLine==0)//the first line in a paragraph
	{
		if(number>0)
		{
			if(number>9)//avoid a leading zero
			{
				if(i<1)
				    return digit1(number);
				i-=1;
			}
			if(i<1)
			return digit2(number);
			i-=1;
		}
		else
		{
			if(i<num_noMore)
				return noMore[i];
			i-=num_noMore;
		}
		
		if(number!=1)//decide wether to write bottle or bottles
		{
			if(i<num_p1)
			    return p1[i];
			i-=num_p1;
		}
		else
		{
			if(i<num_p1-1)
			{//leave out the 's' at index 7
				if(i<7)return p1[i];
				else return p1[i+1];
			}
			i-=num_p1-1;
		}
		
		if(number>0)
		{
			if(number>9)
			{
				if(i<1)
				    return digit1(number);
				i-=1;
			}
			if(i<1)
			return digit2(number);
			i-=1;
		}
		else
		{
			if(i<num_noMore)
				return noMore[i];
			i-=num_noMore;
		}
		
		if(number!=1)
		{
			if(i<num_p2)
			    return p2[i];
			i-=num_p2;
		}
		else
		{
			if(i<num_p2-1)
			{
				if(i<7)return p2[i];
				else return p2[i+1];
			}
			i-=num_p2-1;
		}
		return 32;
	}
	if(paragraphLine==1)//the second line in a paragraph
	{
		if(i<num_p3)
			return p3[i];
		i-=num_p3;
		
		if(number>0)
		{
			if(number>9)
			{
				if(i<1)
				    return digit1(number);
				i-=1;
			}
			if(i<1)
			return digit2(number);
			i-=1;
		}
		else
		{
			if(i<num_noMore)
				return noMore[i];
			i-=num_noMore;
		}
		
		if(number!=1)
		{
			if(i<num_p4)
			    return p4[i];
			i-=num_p4;
		}
		else
		{
			if(i<num_p4-1)
			{
				if(i<7)return p4[i];
				else return p4[i+1];
			}
			i-=num_p4-1;
		}
		
		return 32;
	}
	return 32;//the third line of a paragraph consists of spaces.
}

float4 BeerPixelShader(float4 Tex:TEXCOORD0):COLOR
{
	//subLine is the y-coord within the line from 0 to 1 and iLine is the line number
	float subLine=(1-Tex.y)*numLines;
	float iLine=trunc(subLine);
	subLine-=iLine;
	
	float subChar=Tex.x*numCols;
	float iChar=trunc(subChar);
	subChar-=iChar;
	int charType=GetCharAt(iChar,iLine);
	if(charType==32)return float4(Tex.x,Tex.x,Tex.w,1);
	float4
color=tex2D(FontSampler,float2((subChar*0.6+0.2+charType%16)/16,(subLine+trunc(charType/16))/16));
	color=color*color.a+float4(Tex.x,Tex.x,Tex.w,1)*(1-color.a);
	color.a=1;
	return color;
}

technique bottles
{
	pass Pass0
    {
		VertexShader = compile vs_3_0 BeerVertexShader();
        PixelShader = compile ps_3_0 BeerPixelShader();
	}
}```