
## Language Paint Shop Pro 8 & X ##
---
- Author: taq Okazaki
- Date: 08/13/06
- Info: http
- Score:  (3.02 in 110 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-paint-shop-pro-8-&-x-1237.html
---

```# Python in disguise.
# Creates an graphic image with the lyrics of the song printed on it.
# Script created on Paint Shop Pro 8, 
# works also on Paint Shop Pro X.
#
# I'm not a Paint Shop Pro expert and my Python knowledge is nil,
# so there must be a much better way to do the same thing.

from JascApp import *

def ScriptProperties():
    return {
        'Author': u'',
        'Copyright': u'',
        'Description': u'',
        'Host': u'Paint Shop Pro',
        'Host Version': u'8.02 '
        }

def num_str(i):
	if (i == 0):
		return u"no more"
	else:
		return str(i)

def num_str_cap(i):
	if (i == 0):
		return u"No more"
	else:
		return str(i)

def bottle_str(i):
	if (i == 1):
		return u" bottle"
	else:
		return u" bottles"

def action_str(i):
	if (i == 0):
		return u"Go to the store and buy some more, "
	else:
		return u"Take one down and pass it around, "

t = {
	'CreateAs': App.Constants.CreateAs.Vector, 
	'Segments': [{
		'WarpText': App.Constants.Boolean.false, 
		'Fill': {
			'Color': (0,0,0), 
			'Pattern': None, 
			'Gradient': None, 
			'Texture': None, 
			'Identity': u'Material'
			}, 
		'Font': u'Arial', 
		'LineStyle': {
			'Name': u'', 
			'FirstCap': (u'',0.25,0.25), 
			'LastCap': (u'',0.25,0.25), 
			'FirstSegCap': (u'',0.25), 
			'LastSegCap': (u'',0.25), 
			'UseSegmentCaps': App.Constants.Boolean.false, 
			'Segments': []
			}, 
		'PointSize': 12, 
		'Start': (35.5,107.5), 
		'Stroke': {
			'Color': (255,255,255), 
			'Pattern': None, 
			'Gradient': None, 
			'Texture': None, 
			'Identity': u'Material'
			}
		},{
		'Antialias': App.Constants.Boolean.true, 
		'WarpText': App.Constants.Boolean.false, 
		'AutoKern': App.Constants.Boolean.true, 
		'Bold': App.Constants.Boolean.false, 
		'Kerning': 0, 
		'Leading': 0, 
		'Fill': {
			'Color': (0,0,0), 
			'Pattern': None, 
			'Gradient': None, 
			'Texture': None, 
			'Identity': u'Material'
			}, 
		'Font': u'Arial', 
		'Italic': App.Constants.Boolean.false, 
		'Join': App.Constants.JointStyle.Miter, 
		'LineStyle': {
			'Name': u'', 
			'FirstCap': (u'',0.25,0.25), 
			'LastCap': (u'',0.25,0.25), 
			'FirstSegCap': (u'',0.25), 
			'LastSegCap': (u'',0.25), 
			'UseSegmentCaps': App.Constants.Boolean.false, 
			'Segments': []
			}, 
		'LineWidth': 0, 
		'MiterLimit': 10, 
		'PointSize': 12, 
		'SetText': App.Constants.Justify.Left, 
		'Start': (35.5,107.5), 
		'Strikethru': App.Constants.Boolean.false, 
		'Stroke': {
			'Color': (255,255,255), 
			'Pattern': None, 
			'Gradient': None, 
			'Texture': None, 
			'Identity': u'Material'
			}, 
		'Underline': App.Constants.Boolean.false
		},{
		'Characters': u'98 bottles of beer on the wall, 98 bottles of beer.'
		}], 
	'SavedText': None, 
	'FinalApply': App.Constants.Boolean.false, 
	'GeneralSettings': {
		'ExecutionMode': App.Constants.ExecutionMode.Default, 
		'AutoActionMode': App.Constants.AutoActionMode.Match
		}
	}


def Do(Environment):
	App.Do( Environment, 'NewFile', {
            'Width': 640, 
            'Height': 6000, 
            'ColorDepth': App.Constants.Colordepth.SixteenMillionColor, 
            'DimensionUnits': App.Constants.DimensionType.Pixels, 
            'ResolutionUnits': App.Constants.ResolutionUnits.PixelsPerIn, 
            'Resolution': 200, 
            'FillMaterial': {
                'Color': (255,255,255), 
                'Pattern': None, 
                'Gradient': None, 
                'Texture': None, 
                'Identity': u'Material'
                }, 
            'Transparent': App.Constants.Boolean.false, 
            'VectorBackground': App.Constants.Boolean.false, 
            'GeneralSettings': {
                'ExecutionMode': App.Constants.ExecutionMode.Default, 
                'AutoActionMode': App.Constants.AutoActionMode.Match
                }
            })

	App.Do( Environment, 'SelectDocument', {
            'SelectedImage': 0, 
            'Strict': App.Constants.Boolean.false, 
            'GeneralSettings': {
                'ExecutionMode': App.Constants.ExecutionMode.Default, 
                'AutoActionMode': App.Constants.AutoActionMode.Match
                }
            })

	left = 30
	top = 40
	ystep = 19
	y = top
	for i in range(99, -1, -1):
		t['Segments'][0]['Start'] = (left, y)
		t['Segments'][2]['Characters'] = num_str_cap(i) + bottle_str(i) + u' of beer on the wall, ' \
			+ num_str(i) + bottle_str(i) + u' of beer.'
		App.Do(Environment, 'Text', t)
		y += ystep

		t['Segments'][0]['Start'] = (left, y)
		j = i - 1
		if (j < 0):
			j = 99
		t['Segments'][2]['Characters'] = action_str(i) \
			+ num_str(j) + bottle_str(j) + u' of beer on the wall.'
		App.Do(Environment, 'Text', t)
		y += ystep * 2

		App.Do( Environment, 'LayerConvertToRaster', {
				'GeneralSettings': {
					'ExecutionMode': App.Constants.ExecutionMode.Default, 
					'AutoActionMode': App.Constants.AutoActionMode.Match
					}
				})```