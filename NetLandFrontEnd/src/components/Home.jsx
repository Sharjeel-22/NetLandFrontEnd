import React from 'react';

function Home() {
  return (
    <main class="main">

		<div class="home" style={{backgroundImage: `url("img/home/home-1.jpg")`}}>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="home__content">
							<h1 class="home__title">Discover Rare Digital Art And Collect NFTs </h1>
							<p class="home__text"> The world’s first and largest digital marketplace for crypto
								collectibles <br/> and non-fungible tokens. Buy And sell digital assets. </p>

							<div class="home__btns">
								<a href="explore.html" class="home__btn"> Explore <i class="fal fa-rocket"></i></a>
								<a href="signin.html" class="home__btn home__btn2">Create <i
										class="fal fa-edit"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<section class="live-auction">
			<div class="container">
				<div class="row row--grid">
					
					<div class="col-12">
						<div class="main__title">
							<h2><a href="explore.html">Live auctions</a></h2>
						</div>
					</div>
					
					<div class="col-12">
						<div class="main__carousel-wrap">
							<div class="main__carousel main__carousel--live owl-carousel" id="live">
								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/1.jpg" alt="" />
										<span class="card__time">40 minutes left</span>
									</a>
									<h3 class="card__title"><a href="item.html">Fantacy Of Water Drop</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/1.jpg" alt="" />
										<a href="author.html">@kimberly120</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>3.66 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>1k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="https://www.youtube.com/watch?v=ckHzmP1evNU"
										class="card__cover card__cover--video open-video">
										<img src="assets/img/items/2.jpg" alt="" />
										<i class="far fa-video"></i>
										<span class="card__time">1 hour left</span>
									</a>
									<h3 class="card__title"><a href="item.html">3D Ethereum In Diamond</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/2.jpg" alt="" />
										<a href="author.html">@sheilagne22</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>5.39 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>10k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/3.jpg" alt="" />
										<span class="card__time card__time--clock">
											<i class="far fa-fire"></i>
											<span class="card__clock card__clock--1"></span>
										</span>
									</a>
									<h3 class="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/3.jpg" alt="" />
										<a href="author.html">@humphrey124</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>7.87 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>50k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="#modal-asset" class="card__cover open-modal">
										<img src="assets/img/items/4.jpg" alt="" />
										<span class="card__time">Popup</span>
									</a>
									<h3 class="card__title"><a href="#modal-asset" class="open-modal">Colorful Fantacy
											Flowers</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/4.jpg" alt="" />
										<a href="author.html">@patricia458</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>4.25 ETH</span>
										</div>

										<button class="card__likes card__likes--active" type="button">
											<i class="far fa-heart text-danger"></i>
											<span>100k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/5.jpg" alt="" />
										<span class="card__time card__time--clock">
											<i class="far fa-fire"></i>
											<span class="card__clock card__clock--2"></span>
										</span>
									</a>
									<h3 class="card__title"><a href="item.html">Blue Planet Revolution</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/5.jpg" alt="" />
										<a href="author.html">@kimberly28</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>9.10 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>80k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/6.jpg" alt="" />
										<span class="card__time">25 minutes left</span>
									</a>
									<h3 class="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/6.jpg" alt="" />
										<a href="author.html">@nessler520</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>1.22 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>8k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="#modal-asset" class="card__cover open-modal">
										<img src="assets/img/items/7.jpg" alt=""/>
										<span class="card__time">Popup</span>
									</a>
									<h3 class="card__title"><a href="#modal-asset" class="open-modal">Awesome Color
											Drop</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/7.jpg" alt="" />
										<a href="author.html">@morgan28</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>9.21 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>6k</span>
										</button>
									</div>
								</div>
							</div>

							<button class="main__nav main__nav--prev" data-nav="#live" type="button"><i
									class="far fa-arrow-left"></i></button>
							<button class="main__nav main__nav--next" data-nav="#live" type="button"><i
									class="far fa-arrow-right"></i></button>
						</div>
					</div>
				
				</div>
			</div>
		</section>
		
		<section class="top-seller">
			<div class="container">
				<div class="row row--grid">
				
					<div class="col-12">
						<div class="main__title">
							<h2>Top sellers</h2>
							<a href="authors.html" class="main__link">View all <i class="far fa-arrow-right"></i></a>
						</div>
					</div>
					
					<div class="col-12">
						<ul class="sellers-list">
							<li>
								<span class="sellers-list__number">1</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/1.jpg" alt="" />
									<a href="author.html">@kimberly120</a>
									<span>520.25 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">2</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/2.jpg" alt="" />
									<a href="author.html">@sheilagne22</a>
									<span>310.18 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">3</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/3.jpg" alt="" />
									<a href="author.html">@humphrey124</a>
									<span>288.65 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">4</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/4.jpg" alt="" />
									<a href="author.html">@patricia458</a>
									<span>150.98 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">5</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/5.jpg" alt="" />
									<a href="author.html">@kimberly28</a>
									<span>220.29 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">6</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/6.jpg" alt="" />
									<a href="author.html">@nessler520</a>
									<span>95.72 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">7</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/7.jpg" alt="" />
									<a href="author.html">@morgan28</a>
									<span>180.11 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">8</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/8.jpg" alt="" />
									<a href="author.html">@michalak952</a>
									<span>125.25 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">9</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/9.jpg" alt="" />
									<a href="author.html">@wheeler77</a>
									<span>800.99 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">10</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/10.jpg" alt="" />
									<a href="author.html">@donna211</a>
									<span>602.23 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">11</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/11.jpg" alt="" />
									<a href="author.html">@samuels26</a>
									<span>999.00 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">12</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/12.jpg" alt="" />
									<a href="author.html">@freda100</a>
									<span>22.10 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">13</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/13.jpg" alt="" />
									<a href="author.html">@gipson005</a>
									<span>420.37 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">14</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/14.jpg" alt="" />
									<a href="author.html">@helen22 </a>
									<span>10.00 ETH</span>
								</div>
							</li>

							<li>
								<span class="sellers-list__number">15</span>
								<div class="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/15.jpg" alt="" />
									<a href="author.html">@wilson202</a>
									<span>520.88 ETH</span>
								</div>
							</li>
						</ul>
					</div>
				
				</div>
			</div>

		</section>
	
		<section class="explore-area">
			<div class="container">
				<div class="row row--grid">
				
					<div class="col-12">
						<div class="main__title">
							<h2><a href="explore.html">Explore</a></h2>
						</div>
					</div>
					
					<div class="col-12">
						<div class="main__carousel-wrap">
							<div class="main__carousel main__carousel--explore owl-carousel" id="explore">
								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/8.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Awesome Color
											Drop</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/8.jpg" alt="" />
										<a href="author.html">@morgan28</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>9.21 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>6k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/7.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/7.jpg" alt="" />
										<a href="author.html">@nessler520</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>1.22 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>8k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/6.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Blue Planet Revolution</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/6.jpg" alt="" />
										<a href="author.html">@kimberly28</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>9.10 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>80k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/5.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Colorful Fantacy
											Flowers</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/5.jpg" alt="" />
										<a href="author.html">@patricia458</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>4.25 ETH</span>
										</div>

										<button class="card__likes card__likes--active" type="button">
											<i class="far fa-heart text-danger"></i>
											<span>100k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/4.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/4.jpg" alt="" />
										<a href="author.html">@humphrey124</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>7.87 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>50k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="https://www.youtube.com/watch?v=ckHzmP1evNU"
										class="card__cover card__cover--video open-video">
										<img src="assets/img/items/3.jpg" alt="" />
										<i class="far fa-video"></i>
									</a>
									<h3 class="card__title"><a href="item.html">3D Ethereum In Diamond</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/3.jpg" alt="" />
										<a href="author.html">@sheilagne22</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>5.39 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>10k</span>
										</button>
									</div>
								</div>

								<div class="card">
									<a href="item.html" class="card__cover">
										<img src="assets/img/items/2.jpg" alt="" />
									</a>
									<h3 class="card__title"><a href="item.html">Fantacy Of Water Drop</a></h3>
									<div class="card__author card__author--verified">
										<img src="assets/img/avatars/2.jpg" alt="" />
										<a href="author.html">@kimberly120</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span>Sale price</span>
											<span>3.66 ETH</span>
										</div>

										<button class="card__likes" type="button">
											<i class="far fa-heart"></i>
											<span>1k</span>
										</button>
									</div>
								</div>

							</div>

							<button class="main__nav main__nav--prev" data-nav="#explore" type="button"><i
									class="far fa-arrow-left"></i></button>
							<button class="main__nav main__nav--next" data-nav="#explore" type="button"><i
									class="far fa-arrow-right"></i></button>
						</div>
					</div>
			
				</div>
			</div>
		</section>

		<section class="collection-area">
			<div class="container">
				<div class="row row--grid">
				
					<div class="col-12">
						<div class="main__title">
							<h2>Hot collections</h2>
						</div>
					</div>
					
					<div class="col-12">
						<div class="main__carousel-wrap">
							<div class="main__carousel main__carousel--collections owl-carousel" id="collections">
								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/1.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar collection__avatar--verified">
											<img src="assets/img/avatars/1.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Abstract Geniuses</a>
										</h3>
										<span class="collection__number">ERC-520</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/2.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar collection__avatar--verified">
											<img src="assets/img/avatars/2.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Virtual Worlds</a></h3>
										<span class="collection__number">ERC-650</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/3.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar collection__avatar--verified">
											<img src="assets/img/avatars/3.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Digital Arts</a></h3>
										<span class="collection__number">ERC-220</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/4.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar">
											<img src="assets/img/avatars/4.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Trading Cards</a></h3>
										<span class="collection__number">ERC-852</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/5.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar collection__avatar--verified">
											<img src="assets/img/avatars/5.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Modern Photography</a>
										</h3>
										<span class="collection__number">ERC-800</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/6.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar">
											<img src="assets/img/avatars/6.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Digital Token</a></h3>
										<span class="collection__number">ERC-931</span>
									</div>
								</div>

								<div class="collection">
									<a href="collection.html" class="collection__cover"
										data-bg="assets/img/collection/7.jpg"></a>
									<div class="collection__meta">
										<a href="author.html" class="collection__avatar collection__avatar--verified">
											<img src="assets/img/avatars/7.jpg" alt="" />
										</a>
										<h3 class="collection__name"><a href="collection.html">Analogue Refraction</a>
										</h3>
										<span class="collection__number">ERC-320</span>
									</div>
								</div>
							</div>

							<button class="main__nav main__nav--prev" data-nav="#collections" type="button"><i
									class="far fa-arrow-left"></i></button>
							<button class="main__nav main__nav--next" data-nav="#collections" type="button"><i
									class="far fa-arrow-right"></i></button>
						</div>
					</div>

				</div>
			</div>

		</section>
	
		<div class="call-to-action">
			<div class="container">
				<div class="call-to-action-inr">
					<div class="cta-overlay">
						<div class="cta-content">
							<h2 class="cta-header">
								Create, Sell &amp; Collect NFTs at Netland
							</h2>
							<p class="cta-desc">
								Aliquam viverra enim commodo sed consequat tempor sit nisl cursus lectus.
							</p>
							<div class="cta-action">
								<a href="#" class="cta-btn">Create</a>
								<a href="#" class="cta-btn cta-btn2">Connect Wallet</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section class="blog-area">
			<div class="container">
				<div class="row row--grid">
				
					<div class="col-12">
						<div class="main__title">
							<h2>Latest blog</h2>
							<a href="blog.html" class="main__link">View more <i class="far fa-arrow-right"></i></a>
						</div>
					</div>
				
					<div class="col-12 col-sm-6 col-lg-4">
						<div class="post">
							<a href="article.html" class="post__img">
								<img src="assets/img/blog/1.jpg" alt="" />
							</a>
							<div class="post__content">
								<a href="#" class="post__category">Token</a>
								<h3 class="post__title">
									<a href="blog-single.html">The Rise of the Non Fungible Tokens (NFTs)</a>
								</h3>
								<div class="post__meta">
									<span class="post__date"> <i class="far fa-clock"></i> Sep 14, 2021</span>
									<span class="post__author"><i class="far fa-user"></i> Danielle Rector</span>
								</div>
							</div>
						</div>
					</div>
				
					<div class="col-12 col-sm-6 col-lg-4">
						<div class="post">
							<a href="article.html" class="post__img">
								<img src="assets/img/blog/2.jpg" alt="" />
							</a>
							<div class="post__content">
								<a href="#" class="post__category">Digital</a>
								<h3 class="post__title">
									<a href="blog-single.html">Top 5 Most Popular NFT Games in 2021</a>
								</h3>
								<div class="post__meta">
									<span class="post__date"> <i class="far fa-clock"></i> Sep 14, 2021</span>
									<span class="post__author"><i class="far fa-user"></i> Danielle Rector</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-12 col-sm-6 col-lg-4">
						<div class="post">
							<a href="article.html" class="post__img">
								<img src="assets/img/blog/3.jpg" alt="" />
							</a>

							<div class="post__content">
								<a href="#" class="post__category">Modern Art</a>
								<h3 class="post__title">
									<a href="blog-single.html">Best NFT Selling Marketplace website</a>
								</h3>
								<div class="post__meta">
									<span class="post__date"> <i class="far fa-clock"></i> Sep 14, 2021</span>
									<span class="post__author"><i class="far fa-user"></i> Danielle Rector</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</section>
	
		<section class="feature-area">
			<div class="container">
				<div class="row row--grid">
					
					<div class="col-12">
						<div class="main__title main__title--border-top">
							<h2>Create and sell your NFTs</h2>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="feature">
							<span class="feature__icon">
								<i class="far fa-wallet"></i>
							</span>
							<h3 class="feature__title">Connect your wallet</h3>
							<p class="feature__text">
								Click Create & set up your colecton Add social links and a description profile banner images and set.
							</p>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="feature">
							<span class="feature__icon feature__icon--green">
								<i class="far fa-layer-plus"></i>
							</span>
							<h3 class="feature__title">Set up collection</h3>
							<p class="feature__text">
								Click Create & set up your colecton Add social links and a description profile banner images and set.
							</p>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="feature">
							<span class="feature__icon feature__icon--purple">
								<i class="far fa-images"></i>
							</span>
							<h3 class="feature__title">Add your NFTs</h3>
							<p class="feature__text">
								Click Create & set up your colecton Add social links and a description profile banner images and set.
							</p>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="feature feature--last">
							<span class="feature__icon feature__icon--red">
								<i class="far fa-sack-dollar"></i>
							</span>
							<h3 class="feature__title">Ready for sale</h3>
							<p class="feature__text">
								Click Create & set up your colecton Add social links and a description profile banner images and set.
							</p>
						</div>
					</div>

				</div>
			</div>
		</section>

	</main>
  );
}

export default Home;
