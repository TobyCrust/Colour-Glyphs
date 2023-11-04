## PS3 MDDN 242 2022
### Color Glyphs


This is what I've been looking at to understand the rose a bit better
https://en.wikipedia.org/wiki/Rose_(mathematics)

I played around with having the number of sides on the polygon be less but I found that when this happened I just got a lot more awkward intermediate shapes which didn't look good. I like how when the dark colours are represented it's a minimal triangle with lots of space between each glyph. When the colours are more vibrant it's a much fuller shape with less space in between making it look like the image is joined together.

In random mode there is a huge amount of variation between all of the different glyphs.

In oddball mode most of the time it's super easy to pick out the oddball, unless you get a really dark colour pallet which can be a little more challenging. The reason for this is because I've mapped the lightness to interact with the stroke weight of the rose. The darker the shape is the lower the number representing the stoke weight it. I think that this works really well in image mode because most of the dark colour are black and you don't want to see anything is it would distract from the image. It also means that the outlines are a lot clearer. This however means that in oddball mode when the pallet is dark it is a little harder to see but I think it's worth it for the result you get from the image mode.

I haven't really been designing the glyph to look the best in edit mode which is why the lines look quite small. you can still get some really cool patterns in edit if you try though and it can be really fun to play around in. I've spent more time making sure that it looks good in image mode so that all of the colours are being represented properly and there is lots of variance.

I had some feed back from hazel on my design apparently the glyph looked a bit janky on their end, we found out that this was because I had the dots set to have less in the rotation because when I was in 32 in image mode it was a bit laggy for me. They didn't have any lag so when I submit the final I'll set the dots to be close together. It looked fine when in 32 mode because the amount of dots get more clustered together in a smaller shape and when it's larger they get more spread out. This is also the reason why the amount that the dots change for lightness is quite small because when there put at smaller scales the amount that lightness effects them is a lot more noticable. I then also made it so that instead of the glyph being drawn by points it was instead drawn with a vertex. This solved the issue of the lag as I could have "a" (how far apart the points are being drawn) be further apart as they are all connected. When they were being drawn as points I had to have them a lot closer together to look like they were connected.

To draw the flower shapes you have to have numbers representing n and d. The old way I was drawing the shapes was to have n/d where n = hue and d = negative saturation, which is then divided by 20 because their numbers were too large. The new way that I did it was to map the hue between 1 and 9 and the saturation between -7 and -1. This was a lot more accurate at representing colour and after that it's a lot easier to tell minor differences between colour.

Having the mathematical rose is really good for giving different colours really different looks. When I was playing around before the rose having just polygons changing the amount of sides or having objects rotate around the circle didn't really give much colour variance looks wise. If your looking at the glyphs in image mode and one part of its green and one part of it's red it's super clear that their different colours. I'm also able to tell which colours are which for example the greens are always in the same shape and have the same amount of petals. it takes a second to get used to the different colours and what shapes they will be but when you get used to it you can tell. I did an exercise where I when through the emojies to see whether I could tell if there was any green in the image without looking at the colour and it was quite easy to do.

I want to display the rose as my default emoji but there is almost no colour variation in it, it looks ugly and there is are no interesting patterns in the rose. The flower however looks much better and it's the closest other emoji to a rose emoji.

Overall I think that my glyph represents colour in an accurate interesting and unique way. You can clearly distinguish what images are and you can see little details and variances of colour. It works well in all the modes and is as a standalone glyph and when representing images.
