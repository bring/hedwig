
{navigation}

> The footer is placed at the bottom of every page of the website.

> The footer contains Bring’s logo, links and button links to often used services, as well as links to Bring’s social media platforms.

> The h4 titles in the footer is deprecated and should use h2 instead.





### Default footer width 4 columns

```html


<footer class="hw-footer">
  <div class="hw-container">
    <div class="hw-block">


      <!-- Desktop footer -->

      <div class="hw-footer__desktop">
        

        <div class="hw-block">
          <div class="hw-grid"><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2 class="">Title</h2>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2 class="">Title</h2>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2 class="">Title</h2>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <div class="hw-block hw-block--mb-smallest">
                <button class="hw-button hw-button--full hw-button--outline">
                  For bedrifter
                </button>
              </div>

              <div class="hw-block hw-block--mb-smallest">
                <button class="hw-button hw-button--full hw-button--outline">
                  English site
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="hw-block hw-block--mt-larger">
          <div class="hw-grid"><!--
            --><div class="hw-grid__item hw-one-quarter">
              <div class="hw-block">
                <div class="hw-footer__logo">
                  <a href="#" class="hw-footer__logo-link">
                    <svg class="hw-footer__logo-link-standard">
                      <use xlink:href="#logo-{postenbring}"></use>
                    </svg>
                    <svg class="hw-footer__logo-link-white">
                      <use xlink:href="#logo-{postenbring}-white"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">

            </div><!--
            --><div class="hw-grid__item hw-one-half">
              <div class="hw-block">
                <div class="hw-some">
                  <button class="hw-some__button hw-some__button--facebook">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--google">
                    <i class="fab fa-google-plus-g"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--instagram">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--twitter">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hw-hr hw-block--mt-smallest"></div>


        <div class="hw-block hw-block--mt">
          <span class="hw-copyright">© Posten Norge</span>
          <a href="#" class="hw-link">Privacy and security</a>  
          <a href="#" class="hw-link">Cookies</a>
        </div>

      </div>
    </div>



    <!-- Mobile footer -->

    <div class="hw-footer__mobile">
      <nav class="hw-footer__navigation">
        <div class="hw-block hw-block--mb-smallest">
          <button class="hw-button hw-button--full hw-button--outline">
            For bedrifter
          </button>
        </div>
        <div class="hw-block hw-block--mb-smallest">
          <button class="hw-button hw-button--full hw-button--outline">
            English site
          </button>
        </div>
          <div class="hw-block hw-block--mt">
          <div class="hw-block hw-block--mb-smallest">

          </div>
          
          
        </div>
        <div class="hw-block hw-block--mt-larger">
          <ul class="hw-accordion hw-accordion--menu" data-hw-accordion="mobile-menu" data-hw-accordion-allow-multiple>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Lorem</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Ipsum</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Lorem</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="hw-block hw-block--mb hw-block--mt-larger">
          

          <div class="hw-footer__logo">
            <a href="#" class="hw-footer__logo-link">
              <svg class="hw-footer__logo-link-standard">
                <use xlink:href="#logo-{postenbring}"></use>
              </svg>
              <svg class="hw-footer__logo-link-white">
                <use xlink:href="#logo-{postenbring}-white"></use>
              </svg>
            </a>
          </div>


          <div class="hw-some">
            <button class="hw-some__button hw-some__button--facebook">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button class="hw-some__button hw-some__button--google">
              <i class="fab fa-google-plus-g"></i>
            </button>
            <button class="hw-some__button hw-some__button--instagram">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="hw-some__button hw-some__button--twitter">
              <i class="fab fa-twitter"></i>
            </button>
            <button class="hw-some__button hw-some__button--linkedin">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>


          <div class="hw-hr hw-block--mt-smallest"></div>


          <div class="hw-block hw-block--mt">
            <span class="hw-copyright">© Posten Norge</span>
          </div>
          <div class="hw-block hw-block--mt">
            <a href="#" class="hw-link">Privacy and security</a>  
            <a href="#" class="hw-link">Cookies</a>
          </div>
        </div>
      

      </nav>

    </div>



    <div class="hw-footer__shared">
      
    </div>


    </div>
  </div>
</div>
</div>
</footer>

```


### Slim footer


```html

<footer class="hw-footer hw-footer--slim">
 <div class="hw-container">
   <div class="hw-block hw-block--pt hw-block--pb-large">
    <div class="hw-footer__desktop">

      <div class="hw-grid">
        <div class="hw-grid__item hw-one-quarter">
          <div class="hw-footer__logo">
            <a href="#" class="hw-footer__logo-link">
              <svg class="hw-footer__logo-link-standard">
                <use xlink:href="#logo-{postenbring}"></use>
              </svg>
              <svg class="hw-footer__logo-link-white">
                <use xlink:href="#logo-{postenbring}-white"></use>
              </svg>
            </a>
          </div>
        </div><!--

        --><div class="hw-grid__item hw-three-quarters">
          <div class="hw-block hw-block--mt hw-footer__element-float-right">
            <span class="hw-copyright">© Posten Norge</span>
            <a href="#" class="hw-link">Privacy and security</a>  
            <a href="#" class="hw-link">Cookies</a>
          </div>
        </div>
      </div>
    </div>


    <div class="hw-footer__mobile">

      <div class="hw-footer__logo">
        <a href="#" class="hw-footer__logo-link">
          <svg class="hw-footer__logo-link-standard">
            <use xlink:href="#logo-{postenbring}"></use>
          </svg>
          <svg class="hw-footer__logo-link-white">
            <use xlink:href="#logo-{postenbring}-white"></use>
          </svg>
        </a>
      </div>
          
      <div class="hw-block hw-block--mt">
        <span class="hw-copyright">© Posten Norge</span>
      </div>
      <div class="hw-block hw-block--mt">
        <a href="#" class="hw-link">Privacy and security</a>  
        <a href="#" class="hw-link">Cookies</a>
      </div>
    </div>
  </div>
</div>
</div>
</footer>


```










# Design guidelines


> The footer is placed at the bottom of every page of the website.

> The footer contains Bring’s logo, links and button links to often used services, as well as links to Bring’s social media platforms.



```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-1.png"
title: "Default footer"
```

> In condensed spaces, a slim footer can be used, with just the logo and legal links.

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-2.png"
title: "Slim footer"
```

> Footers can also be expanded with another row of list items, if you need more room for all your content.


```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-3.png"
title: "Example of expanded footer"
```



> Footer on mobile

> On small screens the footer stacks as a vertical container, with the list items in an accordion.

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-4.png"
title: "Footer on mobile"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-5.png"
title: "Slim footer on mobile"
```


