We have developed contract terms to give our developers permission to do OSS contributions in our customer projects. Why? The ideological argument should be obvious and also the motivation boost for our developers. Even if we disregard those, it still makes a whole lot of sense. 

Since we often build solutions with a significant lifecycle, it is everyone's benefit to have the improvements and fixes contributed to the OSS projects. That way we don't need to re-implement them, when we upgrade the component in question. No dull repetitive work for us, less expenses for our customers!

Here we have the latest versions of the contract terms, presented both in English and Finnish. Read the article below for more information on how they came to be. Please note that we have waived the copyright for these license terms! Feel free to make use of them - no need to mention us. If you translate this to some other language and wish to share, let us know and we'll complement this collection!

> Where the Parties have agreed that open source components can be used in the project, all fixes and functional enhancements to any such open source components created as part of the project work can be published by [YOUR COMPANY] and its the developers under the respective open source component's license. In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable open source contribution. When publishing material [YOUR COMPANY] and its developers will ensure that no functionality or information that is considered customer’s trade secret will be published.
>
> By publishing the fixes and enhancements [YOUR COMPANY] will ensure that these changes may become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution. The effort required to publish the change is considered normal project work and prioritized like any other tasks in the project.

And in Finnish:

> Niissä hankkeissa, joissa käytetään avoimen lähdekoodin komponentteja, kaikki tällaisessa hankkeessa laaditut korjaukset ja toiminnalliset parannukset avoimen lähdekoodin komponentteihin voidaan julkistaa [YRITYKSESI] ja sen kehittäjien toimesta kyseisen komponentin lisenssiehtojen mukaisesti. Ohjelmakoodin lisäksi julkaistava työ voi sisältää dokumentaatiota, testejä, graafikkaa tai muita tuotoksia, jotka vaaditaan hyväksyttävään kontribuutioon. [YRITYKSESI] varmistaa ennen julkaisujen tekemistä, ettei asiakkaan liikesalaisuuksiksi luokiteltavaa toiminnallisuutta tai tietoa paljasteta julkaisun yhteydessä.
>
> Korjaukset ja toiminnalliset parannukset julkaisemalla [YRITYKSESI] pyrkii varmistamaan, että nämä muutokset löytyvät myös kyseisten komponenttien uusista versioista. Tämä tekee päivitykset helpommaksi ja madaltaa kokonaisratkaisun ylläpitokustannuksia. Julkaisuun vaadittava työ katsotaan normaaliksi projektityöksi ja se priorisoidaan kuten muukin projektissa tehtävä työ.

The following waiving of copyright covers only the above contract terms in both English and Finnish. 

<p xmlns:dct="http://purl.org/dc/terms/">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <span rel="dct:publisher" resource="[_:publisher]">the person who associated CC0</span>
  with this work has waived all copyright and related or neighboring
  rights to this work.
</p>

The mission
-----------

The world should work like this: When in customer project context we make fixes and enhancements to open sourced components, libraries and frameworks, we are allowed to commit our work to those projects, to improve their quality.
 
However, usually we have an umbrella clause in our contracts stating that all IPR belongs to the customer. Publishing anything would go against this. It is done in some projects, sometimes suggested by our wonderful customers, but overall it seems rare. It is safe to assume this is the case with most companies designing, developing and maintaining digital services for others. 
 
Thus, to accomplish a better world, we need well written contractual terms that we can try to include in our future contracts. 
 
Some considerations
-------------------
 
The contractual terms must hold legally. For this we will need to have a lawyer review. 

However, they must be clear and intuitive enough for the commoner to understand. If the text reads scary legalese, no customer will sign. This was confirmed by our colleague Olli-Pekka Saksa, a salesman by trade and inclination, while we briefly discussed this subject with him.

Our juridically un-challenged colleague Olli Jarva suggested that we could perhaps have a wider term and a narrower term. This seems reasonable; if the customer has doubts about the wider term, we can fallback on the narrower and still accomplish some things of wonder. 

What we create, we will share with the world - that goes without saying. But I do like saying it. The licensing term probably has to be CC0, or "No Rights Reserved", since we can't really assume that other companies in our line of business could give us appropriate credit on their contracts... We sure don't mind if you do!

Pre-study
---------
 
An extensive study (Google and two pints of beer) suggests that good contractual terms for this purpose are not easily available in the internet. In fact we didn't really find anything that would work. We kind of assumed this might be the case in Finnish, but could not find any in English either. All the more reason to create something ourselves. 

First draft
-----------

Here goes, version point one! 

> Fixes and enhancements to any open sourced components used by the project and created as part of the project work, can be published under the same license by the developers, to ascertain the changes will be merged to any future versions of the component. This will make subcomponent upgrades easier and reduce the cost of maintaining the solution. The act of publishing the fix or enhancement is considered normal project work.
>
> This includes potential changes to the fix or enhancement requested by the maintainers of the open sourced component, prior to accepting and merging the contribution.

Well that wasn't so hard. Thirty minutes by a layman. That's a pretty solid contract term, right? 

WRONG. It is THE WORST. Well maybe not the worst, but perhaps I should have stayed in the university. 

Let's dissect, shall we...

Review started with our already introduced contributor extraordinaire, Mr Jarva, M.Sc. (Tech.).

* First chapter is confusing, it gives the impression that everything is included
* Upstream is a common term, should maybe be used
* Many projects requires a contibutor license agreement, CLA
* Open source, not open sourced
* "Under the same license" is too vague

Needs work! And work we shall. 

Second draft
------------

> Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published under the component's license by the developers.
>
> By doing so we will ascertain that the changes will be merged upstream; that they will become a part of any future releases of the component. This will make sub-component upgrades easier and reduce the cost of maintaining the solution.
>
> The effort required to publish the change is considered normal project work. In addition to code, the work to be published may include documentation, tests, graphics or other relevant deliverables.

"Much better!", says Olli, pointing out that 'relevant' is too generic a term. So a couple more refinements required...

Third draft
-----------

This version was presented to the Futurice partner and corporate sponsor of the OSS program, Mikko Viikari:

> Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published under the component's license by the developers.
>
> By doing so we will ensure that the changes will be merged upstream - that they will become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution.
>
> The effort required to publish the change is considered normal project work. In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable contribution.

Comments by Mikko:

* I like it, but the customers may perhaps find it too harsh? 
* Perhaps priorization should be better pointed out; the customer Product Owner still has the control to decide what gets done next
* We need to make it very clear that we will not open source anything that is business critical to the customer, no trade secrets will be leaked through this

Valid points. I speculated that we might have to explain some related terms in the appropriate chapter. Everyone agreed that it would be awesome IF we could avoid that, since it's a slippery slope towards the unreadable legalese that we are trying to avoid...

This discussion lead to the next version.

Fourth draft
------------

Mikko and Olli were happy with this fourth draft, so it was to face the next challenge. A big one! The Legal. Here we get help from a Futurice board member, Jorma Vartia. Pretty awesome to have someone with so much experience to weigh in, without having to actually pay for it!

Here's what I sent to Jorma:

> Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published by the developers under the component's license
>
> The enhancements are functional, generally useful improvements. Functionality or information that could be considered a trade secret will be excluded.
>
> By publishing the fixes and enhancements we will ensure that these changes will become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution.
>
> The effort required to publish the change is considered normal project work and prioritized like any other tasks in the project.
>
> In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable open source contribution.

Fifth draft
-----------

Jorma responded delightfully soon with an improved version:

> Where the Parties have agreed that open source components can be used in the project, all fixes and functional enhancements to any such open source components created as part of the project work can be published by Futurice and its the developers under the respective open source component's license. In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable open source contribution. When publishing material Futurice and its developers will ensure that no functionality or information that is considered customer’s trade secret will be published.
>
> By publishing the fixes and enhancements Futurice will ensure that these changes may become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution. The effort required to publish the change is considered normal project work and prioritized like any other tasks in the project.

... and it indeed is improved, not unrecognizable like I feared. I am happy with this and so are the others in our small task force. Success! We have some text!

The next step was to present this to a few select people heavily involved in customer work... account management... business proposals? For some reason I try to dance around saying sales, but that is precisely what I am talking about. Sales. People who do sales.  

Sales reaction and the Finnish translation
------------------------------------------

Sales turned out not to be a hurdle at all. We sent the fifth draft to two gentlemen, and they both agreed to run them by some customers. 

They DID however point out that we do need a version in Finnish, since their customers are here, and the contracts are mainly in our exotic language. So I translated, Jorma corrected, and Bob's your uncle:

> Niissä hankkeissa, joissa käytetään avoimen lähdekoodin komponentteja, kaikki tällaisessa hankkeessa laaditut korjaukset ja toiminnalliset parannukset avoimen lähdekoodin komponentteihin voidaan julkistaa Futuricen ja sen kehittäjien toimesta kyseisen komponentin lisenssiehtojen mukaisesti. Ohjelmakoodin lisäksi julkaistava työ voi sisältää dokumentaatiota, testejä, graafikkaa tai muita tuotoksia, jotka vaaditaan hyväksyttävään kontribuutioon. Futurice varmistaa ennen julkaisujen tekemistä, ettei asiakkaan liikesalaisuuksiksi luokiteltavaa toiminnallisuutta tai tietoa paljasteta julkaisun yhteydessä.
>
> Korjaukset ja toiminnalliset parannukset julkaisemalla Futurice pyrkii varmistamaan, että nämä muutokset löytyvät myös kyseisten komponenttien uusista versioista. Tämä tekee päivitykset helpommaksi ja madaltaa kokonaisratkaisun ylläpitokustannuksia. Julkaisuun vaadittava työ katsotaan normaaliksi projektityöksi ja se priorisoidaan kuten muukin projektissa tehtävä työ.

This was the term presented to two of our customers in frame agreement negotitions. They had no objections. Amazing!

Next steps
----------

Now we need to get this into as many contracts/frame agreements as possible. We're not sure yet how to go about that, but probably it involves talking with people. Sounds doable. 

Even more important is to encourage people in the projects to actually DO what they are now allowed to do; contribute to the OSS projects. 





















