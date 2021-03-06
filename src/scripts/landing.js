invertHeaderOnCollision()
$(window).scroll(invertHeaderOnCollision)
$('.feature-title').hover(setActiveOnMouseEnter, removeActiveOnMouseLeave)

var numFeatures = $('.feature').length
var currentFeature = 0
var animating = true
function advanceFeature() {
  if (animating) {
    $('.feature-' + currentFeature).removeClass('is-shown')
    currentFeature = (currentFeature + 1) % numFeatures
    $('.feature-' + currentFeature).addClass('is-shown')
  }
}

setInterval(advanceFeature, 4000)

function invertHeaderOnCollision() {
  var colliding = false
  for (var el of $('.js-invertHeaderColor')) {
    if (collide($('.header'), $(el), 0)) {
      colliding = true
      break
    }
  }

  if (!colliding) {
    $('.header').removeClass('inverted')
  } else {
    $('.header').addClass('inverted')
  }
}

function setActiveOnMouseEnter(e) {
  animating = false
  $(this).closest('.feature').addClass('is-active')
}

function removeActiveOnMouseLeave() {
  animating = true
  $(this).closest('.feature').removeClass('is-active')
}

function collide(a, b, margin) {
  margin = margin || 0
  aPos = a.offset()
  bPos = b.offset()

  return !(
    ((aPos.top + a.height() + margin) < (bPos.top)) ||
    (aPos.top > (bPos.top + b.height() + margin)) ||
    ((aPos.left + a.width() + margin) < bPos.left) ||
    (aPos.left > (bPos.left + b.width() + margin))
  );
}

$('.arrow').click(function() {
  $('body').animate({scrollTop: 0}, '300')
})
