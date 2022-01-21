export default {
    "param": {
	"dominantHandshape": "Dominant handshape",
	"dominantLocation": "Dominant location",
	"dominantOrientation": "Dominant orientation",
	"dominantMovement": "Dominant movement",
	"nondominantHandshape": "Non-dominant handshape",
	"nondominantLocation": "Non-dominant location",
	"nondominantOrientation": "Non-dominant orientation",
	"nondominantMovement": "Non-dominant movement"
    },
    "menuText": {
	"dominantLocation": {
	    "Q": "Neutral (Q)",
	    "rest": "Rest",
	    "h": "Face or whole head (h)",
	    "u": "Upper face, forehead (u)",
	    "m": "Mid-face, eye, nose (m)",
	    "l": "Lower face, chin (l)",
	    "c": "Cheek, temple, ear (c)",
	    "k": "Neck (k)",
	    "[": "Torso ([)",
	    "i": "Nondominant upper arm (i)",
	    "j": "Nondominant lower arm (j)",
	    "as": "Nondominant wrist (a/s)"
	},
	"dominantOrientation": {
	    "f": "Away from signer (f)",
	    "t": "Towards signer (t)",
	    "lt": "Towards non-dominant side (&lt;)",
	    "gt": "Towards dominant side (&gt;)",
	    "^": "Upwards (^)",
	    "v": "Downwards (v)"
	},
	"nondominantLocation": {
	    "Q": "Neutral (Q)",
	    "rest": "Rest",
	    "h": "Face or whole head (h)",
	    "u": "Upper face, forehead (u)",
	    "m": "Mid-face, eye, nose (m)",
	    "l": "Lower face, chin (l)",
	    "c": "Cheek, temple, ear (c)",
	    "k": "Neck (k)",
	    "[": "Torso ([)",
	    "i": "Dominant upper arm (i)",
	    "j": "Dominant lower arm (j)",
	    "as": "Dominant wrist (a/s)"	    
	},
	"nondominantOrientation": {
	    "f": "Away from signer (f)",
	    "t": "Towards signer (t)",
	    "lt": "Towards non-dominant side (&lt;)",
	    "gt": "Towards dominant side (&gt;)",
	    "^": "Upwards (^)",
	    "v": "Downwards (v)"
	}
    },
    "defaultValue": {
	"dominantLocation": "rest",
	"dominantOrientation": "f",
	"nondominantLocation": "rest"
    },
    "rotation": {
	"right": {
	    "shoulder": {
		"rest": {
		    "vector": [1, 0, 0],
		    "scalar": 0,
		},
		"Q": {
		    "vector": [-0.887, -0.426, -.176],
		    "scalar": 0.874,
		},
		"u": {
		    "vector": [-0.975, 0.1553, -0.155],
		    "scalar": 1.8
		},
		"m": {
		    "copy": "u"
		},
		"l": {
		    "copy": "u"
		},
		"c": {
		    "vector": [-0.975, 0.1553, -0.155],
		    "scalar": 1.4
		},
		"k": {
		    "copy": "c"
		},
		"[": {
		    "vector": [-0.887, -0.426, -.176],
		    "scalar": 0.4
		},
		"h": {
		    "copy": "c"
		},
		"j": {
		    "vector": [-0.6, 1, -0.3],
		    "scalar": 1
		},
		"as": {
		    "vector": [-0.8, 1, -0.3],
		    "scalar": 1
		},
		"below": {
		    "vector": [0.3, 0.6, -0.3],
		    "scalar": 2
		},
		"side": {
		    "copy": "below"
		}
	    },
	    "elbow": {
		"rest": {
		    "vector": [1, 0, 0],
		    "scalar": 0,
		},
		"Q": {
		    "vector": [1, 0, 0],
		    "scalar": -1.57,
		},
		"u": {
		    "vector": [1, -0.1, 0],
		    "scalar": -2
		},
		"m": {
		    "vector": [1, -0.35, 0],
		    "scalar": -2
		},
		"l": {
		    "vector": [1, -.4, 0],
		    "scalar": -2.6
		},
		"c": {
		    "vector": [1, -0.2, 0],
		    "scalar": -2.3
		},
		"k": {
		    "vector": [1, -0.4, 0],
		    "scalar": -2.6
		},
		"[": {
		    "vector": [1, 0, 0],
		    "scalar": -2.7
		},
		"h": {
		    "copy": "c"
		},
		"j": {
		    "vector": [1, -0.4, 0],
		    "scalar": -1.5
		},
		"as": {
		    "vector": [1, 0, 0],
		    "scalar": -1.5
		},
		"below": {
		    "vector": [1, 0, 0],
		    "scalar": -1.1
		},
		"side": {
		    "vector": [1, 0, 0],
		    "scalar": -1.57
		}
	    },
	    "wrist": {
		"f": {
		    "vector": [-0.5, 0.5, -0.3],
		    "scalar": 1.2
		},
		"gt": {
		    "vector": [0, -1, 0.3],
		    "scalar": 3.14
		},
		"lt": {
		    "vector": [-1, 3, -2],
		    "scalar": -1.5
		},
		"t": {
		    "vector": [0, -1, 0.2],
		    "scalar": 1.8
		},
		"*": {
		    "vector": [0, 1.7, 0],
		    "scalar": 3.14
		},
		"v": {
		    "vector": [0, 0.7, 1],
		    "scalar": 1.5,
		},
		"n": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"z1": {
		    "vector": [-0.5, 1, 1],
		    "scalar": 1
		}
	    }
	},
	"left": {
	    "shoulder": {
		"rest": {
		    "vector": [1, 0, 0],
		    "scalar": 0,
		},
		"Q": {
		    "vector": [0.887, -0.426, -.176],
		    "scalar": -0.874,
		},
		"u": {
		    "vector": [1.5, 0.2, -0.155],
		    "scalar": 1.8
		},
		"m": {
		    "copy": "u"
		},
		"l": {
		    "copy": "u"
		},
		"c": {
		    "vector": [1.5, 0.4, -0.155],
		    "scalar": 1.4
		},
		"k": {
		    "vector": [0.975, 0.1553, -0.155],
		    "scalar": -1.4
		},
		"[": {
		    "vector": [0.8, -0.4, -.1],
		    "scalar": 0.4
		},
		"h": {
		    "vector": [1.5, 0.4, -0.155],
		    "scalar": -1.4
		},
		"j": {
		    "vector": [0.6, 1, -0.3],
		    "scalar": 1
		},
		"as": {
		    "vector": [0.8, 1, -0.3],
		    "scalar": -1
		},
		"below": {
		    "vector": [0.3, 0.6, -0.3],
		    "scalar": -2
		},
		"side": {
		    "copy": "below"
		}
	    },
	    "elbow": {
		"rest": {
		    "vector": [1, 0, 0],
		    "scalar": 0,
		},
		"Q": {
		    "vector": [1, 0, 0],
		    "scalar": -1.57,
		},
		"u": {
		    "vector": [-1, -0.1, 0],
		    "scalar": 2
		},
		"m": {
		    "vector": [1, 0.35, 0],
		    "scalar": -2
		},
		"l": {
		    "vector": [1, 0.4, 0],
		    "scalar": -2.6
		},
		"c": {
		    "vector": [1, -0.2, 0],
		    "scalar": 2.3
		},
		"k": {
		    "vector": [1, 0.4, 0],
		    "scalar": -2.6
		},
		"[": {
		    "vector": [1, 0, 0],
		    "scalar": -2.7
		},
		"h": {
		    "copy": "c"
		},
		"j": {
		    "vector": [1, -0.4, 0],
		    "scalar": -1.5
		},
		"as": {
		    "vector": [1, 0, 0],
		    "scalar": -1.5
		},
		"below": {
		    "vector": [1, 0, 0],
		    "scalar": -1.1
		},
		"side": {
		    "vector": [1, 0, 0],
		    "scalar": 0
		}
	    }
	}
    }
};
