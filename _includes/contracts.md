The mission
-----------

The world should work like this: When in customer project context we make fixes and enhancements to open sourced components, libraries and frameworks, we are allowed to commit our work to those projects.
 
However, usually we have an umbrella clause in our contracts stating that all IPR belongs to the customer. Publishing anything would go against this. It is done in some projects, sometimes suggested by our wonderful customers, but overall it seems rare. It is safe to assume this is the case with most companies designing, developing and maintaining digital services for others. 
 
Thus, to accomplish a better world, we need well written contractual terms that we can try to include in our future contracts. 
 
Some considerations
-------------------
 
The contractual terms should withstand juridically. For this we will need to have a lawyer review. 

However, they must also be clear and intuitive enough for the commoners to understand. If the text reads like scary legalese, no customer will sign. This was confirmed by our colleague Olli-Pekka Saksa, a salesman by trade and inclination, while we briefly discussed this subject with him.

Our juridically inclined colleague Olli Jarva suggested that we could perhaps have a wider term and a narrower term. This seems reasonable; if the customer has doubts about the wider term, we can fallback on the narrower and still accomplish some things of wonder. 

What we create, we will share with the world - that goes without saying. But I do like saying it. The licensing term probably has to be CC0, or "No Rights Reserved", since we can't really assume that other companies in our line of business could give us appropriate credit on their contracts... We sure don't mind if you do!

Pre-study
---------
 
An extensive study (Google and two pints of beer) suggests that good contractual terms for this purpose are not easily available in the internet. In fact we didn't really find anything that would work. We kind of assumed this might be the case in Finnish, but could not find any in English either. That's all the more reason to create something ourselves. 

First draft
-----------

Here goes, version point one!

_Fixes and enhancements to any open sourced components used by the project and created as part of the project work, can be published under the same license by the developers, to ascertain the changes will be merged to any future versions of the component. This will make subcomponent upgrades easier and reduce the cost of maintaining the solution. The act of publishing the fix or enhancement is considered normal project work._

_This includes potential changes to the fix or enhancement requested by the maintainers of the open sourced component, prior to accepting and merging the contribution._

Well that wasn't so hard. Thirty minutes by one uni-drop-out That's a pretty solid contract term, right? 

WRONG. It is THE WORST. Well maybe not the worst, but perhaps I should have stayed in the university. 

Let's dissect, shall we...

Review started with our contributor extraordinary, Mr Jarva, M.Sc. (Tech.).

* First chapter is confusing, it gives the impression that everything is included
* Upstream is a common term, should maybe be used
* Many projects requires a contibutor license agreement, CLA
* Open source, not open sourced
* "Under the same license" is too vague

No point to go further with this one. 

Second draft
------------

_Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published under the component's license by the developers._

_By doing so we will ascertain that the changes will be merged upstream; that they will become a part of any future releases of the component. This will make sub-component upgrades easier and reduce the cost of maintaining the solution._

_The effort required to publish the change is considered normal project work. In addition to code, the work to be published may include documentation, tests, graphics or other relevant deliverables._

"Much better!", says Olli, pointing out that "relevant" is a term too generic. So a couple more refinements required...

Third draft
-----------

This version was presented to the Futurice partner and corporate sponsor of the OSS program, Mikko Viikari:

_Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published under the component's license by the developers._

_By doing so we will ensure that the changes will be merged upstream - that they will become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution._

_The effort required to publish the change is considered normal project work. In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable contribution._

Comments from Mikko:

* I like it, but the customers may perhaps find it too harsh? 
* Perhaps priorization should be better pointed out; that the customer Product Owner still has the control to decide what gets done next? 
* Need to make it very clear that we will not open source anything that is business critical to the customer, trade secrets will not be leaked through this

Valid points. I commented to this that we might have to explain some related terms in the appropriate chapter. Everyone agreed that it would be awesome, if we could avoid that, since it's a slippery slope towards the unreadable legalese that we try to avoid...

This discussion lead to the next version.

Fourth draft
------------

Mikko and Olli were happy with this, so on to the next challenge. A big one! The Legal. 

Here's what I sent:

_Fixes and enhancements to any open source components used in the project, created as part of the project work, can be published by the developers under the component's license_

_The enhancements are functional, generally useful improvements. Functionality or information that could be considered a trade secret will be excluded._

_By publishing the fixes and enhancements we will ensure that these changes will become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution._

_The effort required to publish the change is considered normal project work and prioritized like any other tasks in the project._

_In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable open source contribution._

Fifth draft
-----------

Here's how Jorma countered:

_Where the Parties have agreed that open source components can be used in the project, all fixes and functional enhancements to any such open source components created as part of the project work can be published by Futurice and its the developers under the respective open source component's license. In addition to code, the work to be published may include documentation, tests, graphics or other deliverables required to make an acceptable open source contribution. When publishing material Futurice and its developers will ensure that no functionality or information that is considered customer’s trade secret will be published._

_By publishing the fixes and enhancements Futurice will ensure that these changes may become a part of any future releases of the component. This will make upgrades easier and reduce the cost of maintaining the solution. The effort required to publish the change is considered normal project work and prioritized like any other tasks in the project._

I am happy with this and so are the others in our small task force. Yeah!

The next step was to present this to a few select people heavily involved in customer work... account management... business proposals. I try to dance around and avoid saying sales, but that is precisely what I am talking about. 
















