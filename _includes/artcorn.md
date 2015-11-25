# Making of the Artcorn

This post is a study on how *quickly trying out a cool thing* so easily gets out of hand, or as we Finns say, slips away from a woollen glove.

My colleague [Ville](http://futurice.com/people/ville-tainio) showed me a small picture he had made with [neural-style](https://github.com/jcjohnson/neural-style), a [torch](http://torch.ch) implementation of the paper [A Neural Algorithm of Artistic Style](http://arxiv.org/abs/1508.06576) by Leon A. Gatys, Alexander S. Ecker, and Matthias Bethge. He had used it on our Social Responsibility Program logo. I saw potential and decided to just *quickly try*. It's been three weeks now and not nearly enough sleep.

## The sciencey stuff

The algorithm implementation (written in [Lua](http://www.lua.org) and well documented by [jcjohnson](https://github.com/jcjohnson)) uses neural representations to first separate, then recombine the content and style of different images, to create a new image. The neural network tries to work out what is unique in the artist's style, then use that style on the provided content.

It uses a convolutional neural network, a feed-forward neural network inspired by biological processes, in which the neurons respond to overlapping regions in the visual field. The network consists of multiple layers of small neuron collections called receptive fields. When doing propagation, the momentum and weight decay values are chosen to reduce oscillation during stochastic gradient descent. I have, at this point, no idea what that last sentence means.

This algorithm is, however, pretty well explained in the paper. These neurons are computational units working as a collection of image filters, extracting a certain feature from the input image, each. Each layer produces a differently filtered version of the image. Through the processing hierarchy the input image is transformed into representations that care about the actual content of the image, not just pixel values. High-level content representation is in terms of objects and their arrangement.

For the style image texture information is captured, but the content is not relevant. As a result we have separate content and style, and they can be used to produce new imagery that still makes sense.

Read the [paper](http://arxiv.org/abs/1508.06576) for more information. I am just a random guy who wants to make Artcorns.

I am going to use this marvel of modern science to create surreal versions of our logo. These images will be used to print promotional beverage coasters! We can then sneak some of them into random bars, and... that's about as far as I've planned this.

"Prototype Artcorn Coasters" by Teemu Turunen <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/prototype-artcorn-coasters.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/prototype-artcorn-coasters.jpg" alt="Coaster prototypes" /></a>
    </div>
</div>


Here's the logo original by [Pekka Pulli](http://pekkapulli.com), the [Chilicorn](http://spiceprogram.org/chilicorn/) <small>[copyright [Futurice](http://www.futurice.com), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/logo/chilicorn_no_text-512.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/logo/chilicorn_no_text-512.png" alt="Chilicorn original" /></a>
    </div>
</div>

## Using the algorithm

There are plenty of parameters you can tweak in the algorithm. I get into some of those later in this post. For the Artcorns (artistically altered Chilicorns) I go with the basics:

	-style_image starry_night.jpg (the image from which the style is learned from)
	-content_image chilicorn_no_text-1024.png  (the content on which the learned style is applied to)
	-image_size 1024 (the size of the output image, pixels)
	-num_iters 1000 (how many iterations are run)
	-save_iter 5 (save every 5th iteration into a file)
	-output_image starrycorn.png (name of the output image)
	-gpu -1 (use CPU instead of GPU even if the latter is available)

The algorithm is run with 1000-2000 iterations. I want to print 200 versions of the developing output while it churns away, to study them and so I can combine them into a video. There seems to be some variance on how frequently the algorithm implementation allows you to save the output, using a number as low as five may cause it to decline service and exit. Or not. If that happens, I then try save_iter 6 and num_iters 1200, or save_iter 7 and num_iters 1400... I'll see if I can disable that particular check at some point, it does not make sense to me.

The resulting two hundred PNG images are combined into an mp4 encoded video using ffmpeg. I created 20 second long videos. 

## Environments

Installing the dependencies for the neural-style algorithm was quite straightforward. I started by running it on a virtualized CentOS server, for which I allocated 10GB of memory, assuming it to be plenty.

"I Got This" by Teemu Turunen, <small>[No Rights Reserved, [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/got_this.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/got_this.png" alt="I Got This" /></a>
    </div>
</div>

It was **not** plenty.

I quickly learned that with 10GB I can create 600px images, not larger. Also my CentOS does not have a suitable GPU for this purpose. This type of computing is much, much faster on GPU. By increasing the server memory to 27GB I manage to create 1024px images on CPU - seven hours per image. I could maybe even do 1280px, but the time required grows exponentially.

That is too much time to find out that the end result sucks, which is why I booked an AWS G2 instance (g2.2xlarge) that comes with a suitable GPU. Unfortunately that GPU only has 4GB of memory, again limiting the picture size to 512px. Running that on AWS GPU only takes 40 minutes though, which is great for prototyping. Installing neural-style with dependencies on the AWS instance was even easier, it's a five minute job.

All videos on this site have been created on the CentOS server at 1024px size utilizing the CPU for the computing. Most of them have first been prototyped as 512px version on AWS on GPU.

"Top output while running neural-style on CentOS on CPU" by Teemu Turunen <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/centos_top_neural_style.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/centos_top_neural_style.png" alt="Top output while running neural-style on CentOS on CPU" /></a>
    </div>
</div>

If you can get a GPU with 8GB or more memory, I highly recommend it... this is excruciatingly slow! A thousand iterations is a lot though - you can see at around 250-300 whether the result will be interesting. On AWS with smaller images that's just 10 minutes each.

## The Artcorns

I picked some well known paintings for the algorithm to learn the style of. They are also old enough to fall into the Public Domain. I assume that using a style of a copyrighted work should not be an infringement, but I have zero interest in becoming the precedent in court.

### Rousseaucorn 

Style is learned by the neural algorithm from Henri Rousseau's Tiger in a Tropical Storm <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/f/fa/Surprised-Rousseau.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/rousseau2.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/rousseau2.jpg" alt="Henri Rousseau - Tiger in a Tropical Storm" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146779497" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

### Starrycorn

Style is learned by the neural algorithm from Vincent van Gogh's The Starry Night <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://en.wikipedia.org/wiki/The_Starry_Night#/media/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/starry.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/starry.jpg" alt="Vincent Van Gogh - The Starry Night" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146779499" width="500" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

### Picassocorn

Style is learned by the neural algorithm from Pablo Picasso's Self Portrait (1907) <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [WikiArt](http://www.wikiart.org/en/pablo-picasso/self-portrait-1907)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/picasso.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/picasso.jpg" alt="Pablo Picasso - Self Portrait (1907)" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146782286" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

### Egyptcorn

Style is learned by the neural algorithm from an Egyptian tomb wall-painting from the 10th tomb at Gourna, Tebes <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Egyptian_tomb_wall-painting_-_Egyptian_Collections,_Vol._XI_(1826-1838),_f.118_-_BL_Add_MS_29822.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/egyptian.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/egyptian.jpg" alt="Egyptian tomb wall-painting from the 10th tomb at Gourna, Tebes" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146779496" width="500" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

### Mapcorn

Style is learned by the neural algorithm from a hand-drawn map of Stralsund, from the book History of the Thirty Years' War by Anton Gindely, 1884 <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [the British Library Collection in Flickr](https://www.flickr.com/photos/britishlibrary/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/mapofstralsund.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/mapofstralsund.jpg" alt="A hand-drawn map of Stralsund" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146779498" width="500" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

### Attack of the 50 foot Corn

Style is learned by the neural algorithm from the movie poster for Attack of the 50 Foot Woman, by Allied Artists, 1958 <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikipedia](https://en.wikipedia.org/wiki/Attack_of_the_50_Foot_Woman#/media/File:Attackofthe50ftwoman.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/attackofthe50ftwoman.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/attackofthe50ftwoman.jpg" alt="Movie poster - Attack of the 50 Foot Woman" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146779494" width="500" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

## Enough Artcorns!

That is true, I got carried away. With my CentOS server it took about 48 hours of computing to create those.

What did I learn, other than that we still really need more powerful computers?

The algorithm obviously learns the color and texture from the paintings very well. Even fairly colorless images, such as the map, transform the content greatly.

Using a style image with very uniform texture is pretty much the same as applying a simple Photoshop filter on the content image, just a lot slower. Having variance in the style image makes things more interesting.

Chilicorn, as an image, is also not ideal as a content as it is very simple and compact; no room for the larger style elements to manifest.

I have the images for the coasters now. They are going to be the envy of the town! Stop by our office a bit later this year, and you might get one.

Let's try something else then...

## Applying styles on a photograph

I have a picture of the the Futurice Helsinki office with some people hanging around. 

I'll try a few different styles on that next.

The Futurice Helsinki office <small>[copyright [Futurice](http://www.futurice.com), All Rights Reserved - used with permission]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/futuoffice.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/futuoffice.jpg" alt="Movie poster - Attack of the 50 Foot Woman" /></a>
    </div>
</div>

The style image is a picture of an illuminated copper engraving, from Metamorphosis insectorum Surinamensium, Plate XLV. 1705, by the awesome scientist Maria Sibylla Merian <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [WikiArt](http://uploads4.wikiart.org/images/maria-sibylla-merian/from-metamorphosis-insectorum-surinamensium-plate-xlv-1705.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/merian.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/merian.jpg" alt="Maria Sibylla Merian - Metamorphosis insectorum Surinamensium, Plate XLV" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791236" width="500" height="339" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

Bamboo under Spring Rain, Xia Chang, 1460AD, Ink on paper and mounted as a handscroll. <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Xia_Chang,_Chinese_-_Bamboo_under_Spring_Rain_-_Google_Art_Project.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/bamboo-scaled.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/bamboo-scaled.jpg" alt="Xia Chang - Bamboo under Spring Rain" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791235" width="500" height="339" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

Image of an oil painting presenting a bazaar, credited to John Varley <small>[copyright [Wellcome Library](http://wellcomeimages.org/indexplus/image/V0017599.html), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/bazaar.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/bazaar.jpg" alt="Image of an oil painting presenting a bazaar" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791234" width="500" height="339" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

Pablo Picasso, Still Life with Liqueur Bottle, 1909, <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [nonsite.org](http://nonsite.org/wp-content/uploads/2012/03/Fig.-11.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/picasso2.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/picasso2.jpg" alt="Pablo Picasso - till Life with Liqueur Bottle, 1909" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791233" width="500" height="339" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

## Combining multiple styles and setting their weight

You can also give multiple style pictures and define style weighting. For instance, if we take the content from another office pic, taken at our weekly tech sharing event WWWeeklies by someone who caught Andre watching a video of himself instead.

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/wwweeklies-futurice.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/wwweeklies-futurice.png" alt="Photograph by Futurice" /></a>
    </div>
</div>

The first style is selected to see if we can apply some finer texture to it, by using a photograph. 

This Awesome Moss Growing On My Backyard by Teemu Turunen <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/moss.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/moss.jpg" alt="Photograph of moss by Teemu Turunen" /></a>
    </div>
</div>

The second style brings strong shapes that overlap the people in the office pic.

It is important to note that if I understood the workings of this algorithm correctly, the fact that the spirals overlap people has no relevanca, since the algorithm separates the style from the content.

Freehand Golden Spirals in MS Paint Like a Boss by Teemu Turunen <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/nautilus-wwweeklies.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/nautilus-wwweeklies.jpg" alt="Image of spirals by Teemu Turunen" /></a>
    </div>
</div>

I want to emphasize shape over texture, so I give 70% style-weight for the spirals, 30% for the moss.

This is what happens:

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146913769" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

The shapes aren't there. Time to add style-weight. The default is 100, and increasing or reducing the number should affect how much the style image(s) affect the end result.

As a high-roller, I'll double it to 200. Behold!

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146913771" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

Yeah, I rolled too high. Reducing style-weight to 150.

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146913770" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

Perfect! I have combined two decent enough pictures and a doodle, spent 24 hours and a lot of electricity, and created something very ugly.

At least it was educational. Style-weight clearly has a huge impact on the result. Using multiple styles for the same image may be challenging to predict, not sure if I see a reason for it. 

Also due to the spiral experiment I am now convinced that style is indeed separated from the content; having the spirals overlap the people in the style image does not seem to matter. 

## The mutant invasion

Recently an already iconic pic was taken at our company annual party. Our Tampere office band, BAD finance, rocked the stage and this bandfie was taken by [Mikko Pohja](http://futurice.com/people/mikko-pohja) <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/badfinance.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/badfinance.jpg" alt="BAD finance performing at Kaapelitehdas, by Mikko Pohja" /></a>
    </div>
</div>

I was pretty excited about applying neural-style to this picture, but... 

Nope. 

The people on the front are just the wrong size I guess. You can recognise facial features easily from the original, but there's not enough space for the algorithm to twist them in a way that does not create mutants. 

I'll just link images for these. First I tried with Camillo Pissarro's Kastanienbäume in Louveciennes <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Camille_Pissarro_018.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/pissarro.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/pissarro.jpg" alt="Camille Pissarro - Kastanienbäume in Louveciennes" /></a>
    </div>
</div>

Spotted mutants! <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/badpissarro_950.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/badpissarro_950.png" alt="" /></a>
    </div>
</div>

What's with the Guy Fawkes in front middle? :-o

Then with Hugo Simberg's Kuoleman puutarha <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hugo_Simberg_-_Kuoleman_puutarha_(1896).jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/deathsimberg.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/deathsimberg.jpg" alt="Hugo Simberg - Kuoleman puutarha" /></a>
    </div>
</div>

Nightmare mutants, as expected! <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small> 

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/badddeath.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/badddeath.png" alt="" /></a>
    </div>
</div>

New York Time's front page from 1914 <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Headline_of_the_New_York_Times_June-29-1914.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/headlinenyt.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/headlinenyt.jpg" alt="New York Times headline 1914" /></a>
    </div>
</div>

Papercut mutants! <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/badpaper.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/badpaper.png" alt="" /></a>
    </div>
</div>

The Great Wave off Kanagawa <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikipedia](https://en.wikipedia.org/wiki/File:The_Great_Wave_off_Kanagawa.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/jap.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/jap.jpg" alt="The Great Wave off Kanagawa" /></a>
    </div>
</div>

Artsy tranquil mutants! <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/japfinance.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/japfinance.png" alt="" /></a>
    </div>
</div>

And finally, the PAL test pattern PM5544 <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikipedia](https://en.wikipedia.org/wiki/Philips_PM5544#/media/File:PM5544_with_non-PAL_signals.png)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/pal-test-pattern.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/pal-test-pattern.jpg" alt="PAL Test Pattern PM5544" /></a>
    </div>
</div>

Cool cubistic mutants! <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/palfinance.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/palfinance.png" alt="" /></a>
    </div>
</div>

A character from Doom on the front left though?

Conclusion: This type of images are not good for content, unless you are after mutants.

Apologies to [BAD finance](https://www.facebook.com/badfinance/)!

## Practical uses 

I still really have none, except for the coasters. 

Landscapes are where this algorithm really shines. A good balance of details (like trees, buildings, people) and open space (sky, sea...).

Here's a photo taken at our office balcony in Helsinki, featuring a bottle of our company blend, Cache Buster. The pic was taken by our whisky club president, Rauli Poikela <small>[[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/viski-scaled.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/viski-scaled.jpg" alt="Helsinki skyline with Cache Buster by Rauli Poikela" /></a>
    </div>
</div>

Let's spice it up with some neural voodoo using this serene painting - Oulu Fire 1882, by Herman Josef Kesti <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikipedia](https://commons.wikimedia.org/wiki/File:Herman_Kesti_Oulu_Fire_1882.JPG)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/oulufire.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/oulufire.jpg" alt="Painting of Oulu Fire 1882, by Herman Josef Kesti" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791231" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

That is actually quite impressive. Landscapes are clearly the way to go, if you want pretty images. 

Earlier I tried the newspaper texture on the band pic. It didn't work out, but the result was interesting. Let's see how it works on this.

New York Time's front page from 1914 <small>[[Public Domain](https://en.wikipedia.org/wiki/Public_domain), image from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Headline_of_the_New_York_Times_June-29-1914.jpg)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/headlinenyt.jpg"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/headlinenyt.jpg" alt="New York Times headline 1914" /></a>
    </div>
</div>

The video <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <iframe src="https://player.vimeo.com/video/146791232" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</div>

That is actually pretty cool example of the texture transfer. 

This neural-style stuff is highly addictive, so I warn you against trying. 

Thanks for reading!

The author, style from A colourful assortment of paper clips by Purple Sherbet Photography, <small>[copyright Teemu Turunen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)]</small>

<div class="row text-center">
    <div class="col-md-8 col-md-offset-2">
        <a href="{{ site.baseurl }}/assets/img/artcorn/tturclips.png"><img class="padded-img page-img" src="{{ site.baseurl }}/assets/img/artcorn/tturclips.png" alt="Teemu Turunen neural-styled with paper clips" /></a>
    </div>
</div>
