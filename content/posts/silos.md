Title: Silos
Date: 2016-10-02 00:06
Author: JM
Category: Engineering
Tags: doctorate, granular flow, Granular materials, PhD, research, Silo, thesis, Vienna
Slug: silos
Status: published

In this post I want to introduce my doctorate research without assuming
any engineering knowledge.

#### **Background**

From Spring 2010 until the Autumn of 2013, I was a PhD candidate living
in Vienna, Austria and working at the University of Natural Resources
and Life Sciences. Before working in Vienna, I completed my Masters
degree in Civil and Environmental Engineering at the University of
Edinburgh.

My research quantified the effects of changing the strength of gravity
on granular materials moving through storage silos.

This post contains an overview of my work, as well as links to download
my PhD thesis and the short presentation I used when I defended it.

Granular materials are a very general grouping of materials that are
encountered everyday -  salt, pills, breakfast cereal, sand, rice, soil,
landslides are all granular materials. They are ubiquitous and occur in
many different sizes and varieties.

Silos are a common type of container for storing granular materials. You
pour the granular material in from the top, store it for a while, and
then dispense the material in controlled quantities from the bottom.

 

\[foogallery id="1124"\]

 

#### **Research focus**

My research focussed on quantifying how changes in gravity affected the
material contained inside a silo, particularly whilst the silo was being
emptied. This is pertinent because engineers and scientists do not yet
have a scientific understanding of how granular materials behave. Whilst
gravity clearly affects a granular materials, we cannot say exactly how.

This means we can't use analytical methods to quantify the physics that
occur in a real system. Instead we use empirical methods
(approximations, guesses, rules-of-thumb, and knowledge of what worked
in previous similar situations). This isn't necessarily bad, but it is
less efficient and less reliable than an analytical approach.

#### **Research techniques**

##### **Physical modelling**

I built a small model silo (30cm tall) and put it into quite a large
centrifuge (3 metre diameter). By rotating the model silo around the
centre of the centrifuge at a constant speed I could simulate a higher
gravity. I added high-speed cameras, pressure sensors and weighing
scales so that I could measure how the material was moving once I opened
the silo outlet and the silo began to empty.

##### **Numerical modelling**

I also programmed a computer model (using the commercial PFC 3D software
and working in the FISH scripting language) to simulate and investigate
if the same behaviours could be observed numerically as physically
(spoiler alert: not yet).

The class of computer model I used is known as DEM (Discrete Element
Modelling). DEM works by considering every grain of material as a
sphere. If one sphere overlaps with another (i.e. the distance between
the two particle centres is less than the sum of their radiuses) then a
force proportional to the overlap size repels the two spheres away from
each other. This simple approach produces life like behaviour in many
situations, and has many advantages over "continuum" based techniques
that model groups of grains as if they were all just one big grain with
unusual properties. But DEM has one massive limitation - it requires
huge amounts of computational resources - and this limits is use in
practical scenarios outside of theoretical research.

#### **Results**

When gravity increases by a factor of X, both the discharge rate and
local velocities within the silo increase by the square root of X.

That's good to know if you're planning on storing stuff on the moon, but
it's also a useful step towards explaining and quantifying exactly why
the behaviour of a whole heap of sand is so different to just a single
grain by itself.

 

\[foogallery id="1135"\]

 

#### **More Information**

An overview of my research, my doctorate thesis and published papers can
be downloaded below. PDFs containing 3D models and movies require flash
to render, and Adobe Reader Desktop must be used in order to view them.

1.  [PhD
    Thesis (2013)](http://johnmathews.eu/wp-content/uploads/2016/09/thesis_digital_optimised.pdf?csspreview=true)
2.  [Modeling silo discharge in a centrifuge (Powder
    Technology)](http://johnmathews.eu/wp-content/uploads/2017/01/Mathews-Wu_2016_Model-tests-of-silo-discharge-in-a-geotechnical-centrifuge.pdf)
3.  [Experimental investigation of flow and segregation behaviour of
    bulk solids in silos under high gravity conditions (Particles 2013
    conference
    proceedings)](http://johnmathews.eu/wp-content/uploads/2017/01/Mathews-etal_2013_Experimental-investigation-of-flow-and-segregation-behaviour-of-bulk-solids-in-silos-under-high-gravity-conditions.pdf)
4.  [Centrifugal modelling of granular flows (Eurofuge conference
    proceedings)](http://johnmathews.eu/wp-content/uploads/2017/01/004-Cabrera-et-al.pdf)
5.  [Overview of research (PhD
    defence, 2013)](http://johnmathews.eu/wp-content/uploads/2016/09/Defence_presentation.pdf)

