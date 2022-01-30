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
	    "lt": "Towards non-dominant side (<)",
	    "gt": "Towards dominant side (>)",
	    "carat": "Upwards (^)",
	    "v": "Downwards (v)"
	},
	"dominantHandshape": {
	    "A": "A",
	    "B": "B",
	    "B5": "B5",
	    "bentB5": "Bent 5 (B5)",
	    "C": "C",
	    "E": "E",
	    "F": "F",
	    "G": "G",
	    "H": "H",
	    "I": "I",
	    "K": "K",
	    "L": "L",
	    "L3": "L3",
	    "O": "O",
	    "R": "R",
	    "V": "V",
	    "W": "W",
	    "X": "X",
	    "Y": "Y",
	    "Y8": "Y8"
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
	    "lt": "Towards non-dominant side (<)",
	    "gt": "Towards dominant side (>)",
	    "carat": "Upwards (^)",
	    "v": "Downwards (v)"
	},
	"nondominantHanshape": {
	    "A": "A",
	    "B": "B",
	    "B5": "B5",
	    "bentB5": "Bent 5 (B5\")",
	    "C": "C",
	    "E": "E",
	    "F": "F",
	    "G": "G",
	    "H": "H",
	    "I": "I",
	    "K": "K",
	    "L": "L",
	    "L3": "L3",
	    "O": "O",
	    "R": "R",
	    "V": "V",
	    "W": "W",
	    "X": "X",
	    "Y": "Y",
	    "Y8": "Y8"
	}
    },
    "defaultValue": {
	"dominantLocation": "rest",
	"dominantOrientation": "f",
	"dominantHandshape": "bentB5",
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
		    "scalar": 1.7
		},
		"m": {
		    "copy": "u"
		},
		"l": {
		    "copy": "u"
		},
		"c": {
		    "vector": [-0.975, 0.1553, -0.155],
		    "scalar": 1.3
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
		    "scalar": -1.7,
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
		    "vector": [-1, 0.3, -0.2],
		    "scalar": -1.5
		},
		"t": {
		    "vector": [0, -1, 0.2],
		    "scalar": 1.8
		},
		"carat": {
		    "vector": [0, 1, 0],
		    "scalar": Math.PI
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
	    },
	    "thumb1": {
		"A": {
		    "vector": [1, 0, 0],
		    "scalar": -0.5
		},
		"B": {
		    "vector": [0.5, -1, 0.25],
		    "scalar": 2.5
		},
		"B5": {
		    "vector": [1, 0, 0],
		    "scalar": -1.57
		},
		"bentB5": {
		    "vector": [0.5, -1, 0],
		    "scalar": 2
		},
		"C": {
		    "vector": [0.5, -1, -0.25],
		    "scalar": 2.5
		},
		"E": {
		    "vector": [0.5, -1, 0.5],
		    "scalar": 1.5
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "B"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "E"
		},
		"L": {
		    "vector": [1, 0, 0],
		    "scalar": -1.57
		},
		"L3": {
		    "copy": "L"
		},
		"M": {
		    "copy": "B"
		},
		"N": {
		    "copy": "B"
		},
		"O": {
		    "copy": "B"
		},
		"R": {
		    "vector": [-0.1, 0.3, 0.2],
		    "scalar": 2.5
		},
		"S": {
		    "copy": "R"
		},
		"T": {
		    "copy": "K"
		},
		"V": {
		    "copy": "R"
		},
		"W": {
		    "vector": [0.03, -0.1, -0.08],
		    "scalar": -3
		},
		"X": {
		    "copy": "B"
		},
		"Y": {
		    "copy": "L"
		},
		"Y8": {
		    "copy": "L"
		}
	    },
	    "thumb2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B": {
		    "vector": [1, 0.5, 0.5],
		    "scalar": -0.5
		},
		"B5": {
		    "copy": "A"
		},
		"bentB5": {
		    "copy": "A"
		},
		"C": {
		    "copy": "A"
		},
		"E": {
		    "vector": [0.1, 0.5, 0.1],
		    "scalar": -1.5
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "B"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "copy": "E"
		},
		"N": {
		    "copy": "E"
		},
		"O": {
		    "copy": "A"
		},
		"R": {
		    "vector": [0.5, 0.5, -1],
		    "scalar": -0.3
		},
		"S": {
		    "copy": "R"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "R"
		},
		"W": {
		    "copy": "R"
		},
		"X": {
		    "copy": "B"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "A"
		}
	    },
	    "thumb3": {
		"A": {
		    "vector": [1, 0, 0],
		    "scalar": -0.5
		},
		"B": {
		    "vector": [1, 0, 0],
		    "scalar": 0.5
		},
		"B5": {
		    "copy": "A"
		},
		"bentB5": {
		    "copy": "B"
		},
		"C": {
		    "copy": "B"
		},
		"E": {
		    "copy": "B"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "A"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "copy": "E"
		},
		"N": {
		    "copy": "E"
		},
		"O": {
		    "copy": "B"
		},
		"R": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"S": {
		    "copy": "R"
		},
		"T": {
		    "copy": "K"
		},
		"V": {
		    "copy": "R"
		},
		"W": {
		    "copy": "R"
		},
		"X": {
		    "copy": "B"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "A"
		}
	    },
	    "index1": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "vector": [1, 0, 0],
		    "scalar": -0.2
		},
		"bentB5": {
		    "vector": [-0.3, 0, 1],
		    "scalar": 0.785
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "B"
		},
		"F": {
		    "copy": "A"
		},
		"G": {
		    "copy": "B"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "A"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B5"
		},
		"M": {	
		    "vector": [0.3, 0, 1],
		    "scalar": 1.57
		},
		"N": {
		    "vector": [0.3, 0, 1],
		    "scalar": 1.57
		},
		"O": {
		    "copy": "A"
		},
		"R": {
		    "vector": [1, 0, 0],
		    "scalar": 0.3
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "M"
		},
		"V": {
		    "copy": "B5"
		},
		"W": {
		    "copy": "B5"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B5"
		}
	    },
	    "index2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 2
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "C"
		},
		"G": {
		    "copy": "B"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "C"
		},
		"N": {
		    "copy": "C"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "C"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "index3": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "C"
		},
		"G": {
		    "copy": "B"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "B"
		},
		"N": {
		    "copy": "B"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "B"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "middle1": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "B"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "A"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "vector": [-0.3, 0, 1],
		    "scalar": 1.57
		},
		"N": {
		    "copy": "M"
		},
		"O": {
		    "copy": "A"
		},
		"R": {
		    "vector": [0, 0, 1],
		    "scalar": -0.3
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "A"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "C"
		}
	    },
	    "middle2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 2
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "C"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "C"
		},
		"N": {
		    "copy": "C"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "middle3": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "B"
		},
		"N": {
		    "copy": "B"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "ring1": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "vector": [1, 0, 0],
		    "scalar": 0.2
		},
		"bentB5": {
		    "vector": [0.3, 0, 1],
		    "scalar": 0.785
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "B"
		},
		"F": {
		    "copy": "B5"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "A"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "vector": [-0.3, 0, 1],
		    "scalar": 1.57
		},
		"N": {
		    "copy": "M"
		},
		"O": {
		    "copy": "A"
		},
		"R": {
		    "copy": "A"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "A"
		},
		"W": {
		    "copy": "B5"
		},
		"X": {
		    "copy": "A"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B5"
		}
	    },
	    "ring2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 2
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "copy": "C"
		},
		"N": {
		    "copy": "A"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "A"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "A"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "middle3": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "B"
		},
		"N": {
		    "copy": "B"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "middle2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 2
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "C"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "B"
		},
		"I": {
		    "copy": "C"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "C"
		},
		"N": {
		    "copy": "C"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "ring3": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "B"
		},
		"N": {
		    "copy": "A"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "pinky1": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "vector": [1, 0, 0],
		    "scalar": 0.4
		},
		"bentB5": {
		    "vector": [0.6, 0, 1],
		    "scalar": 0.785
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "B"
		},
		"F": {
		    "copy": "B5"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "copy": "A"
		},
		"N": {
		    "copy": "A"
		},
		"O": {
		    "copy": "A"
		},
		"R": {
		    "copy": "A"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "A"
		},
		"W": {
		    "copy": "A"
		},
		"X": {
		    "copy": "A"
		},
		"Y": {
		    "copy": "A"
		},
		"Y8": {
		    "copy": "B5"
		}
	    },
	    "pinky2": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 2
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "A"
		},
		"L": {
		    "copy": "A"
		},
		"L3": {
		    "copy": "A"
		},
		"M": {
		    "copy": "A"
		},
		"N": {
		    "copy": "A"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "A"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "A"
		},
		"W": {
		    "copy": "A"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
		}
	    },
	    "pinky3": {
		"A": {
		    "vector": [0, 0, 1],
		    "scalar": 1.57
		},
		"B": {
		    "vector": [0, 0, 1],
		    "scalar": 0
		},
		"B5": {
		    "copy": "B"
		},
		"bentB5": {
		    "vector": [0, 0, 1],
		    "scalar": .5
		},
		"C": {
		    "vector": [0, 0, 1],
		    "scalar": .785
		},
		"E": {
		    "copy": "A"
		},
		"F": {
		    "copy": "B"
		},
		"G": {
		    "copy": "A"
		},
		"H": {
		    "copy": "A"
		},
		"I": {
		    "copy": "B"
		},
		"K": {
		    "copy": "B"
		},
		"L": {
		    "copy": "B"
		},
		"L3": {
		    "copy": "B"
		},
		"M": {
		    "copy": "A"
		},
		"N": {
		    "copy": "A"
		},
		"O": {
		    "copy": "C"
		},
		"R": {
		    "copy": "B"
		},
		"S": {
		    "copy": "A"
		},
		"T": {
		    "copy": "A"
		},
		"V": {
		    "copy": "B"
		},
		"W": {
		    "copy": "B"
		},
		"X": {
		    "copy": "C"
		},
		"Y": {
		    "copy": "B"
		},
		"Y8": {
		    "copy": "B"
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
