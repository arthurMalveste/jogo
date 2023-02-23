namespace SpriteKind {
    export const o9 = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Arquivo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f . . . . . . . . . . . 
        f 4 4 4 4 f f f f f f f f f f . 
        f 4 4 4 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
        f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Arquivo.setPosition(randint(80, 210), randint(80, 210))
})
info.onScore(80, function () {
    Virus.follow(Nuvem, 75)
    Virus_2.follow(Nuvem, 80)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(Nuvem, effects.spray, 300)
    info.changeScoreBy(0)
    game.gameOver(false)
})
info.onScore(50, function () {
    Virus_2 = sprites.create(img`
        ...........a............
        .....4..ff...f..........
        .......ff4f.f4f...4.....
        ......f2442f444ff.......
        ......f4a2444244f..a....
        .....f24242222424f......
        ..4..f4422222a24f.......
        ..a2..f4222222244f.4....
        .....f442aa22244f...2...
        ......ff4a2222444f......
        ......f424444422f.......
        .......ff4f4f4f4f.......
        .....a...f.fff.f........
        ....2............a......
        ...........4......2.....
        ..........2.............
        `, SpriteKind.Enemy)
    Virus_2.setPosition(79, 10)
    Virus_2.follow(Nuvem, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Arquivo, effects.spray, 300)
    info.changeScoreBy(10)
    music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004070000000400022024`), music.PlaybackMode.UntilDone)
})
let Variavel_2 = 0
let Virus_2: Sprite = null
let Nuvem: Sprite = null
let Virus: Sprite = null
let Arquivo: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Arquivo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f . . . . . . . . . . . 
    f e e 4 4 f f f f f f f f f f . 
    f 4 4 4 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 8 8 8 8 8 8 5 5 5 5 f 
    f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Virus = sprites.create(assets.image`Virus 1`, SpriteKind.Enemy)
Nuvem = sprites.create(img`
    .........bbbb...........
    .......bb1111bb.........
    ......bb111111bbbbb.....
    ......b1111111ddd11b....
    ......b11111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d11111111111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111d11111dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    `, SpriteKind.Player)
let Variavel = 0
let Variavel_3 = 0
Nuvem.setPosition(75, 60)
scene.cameraFollowSprite(Nuvem)
info.setScore(0)
Arquivo.setPosition(randint(80, 180), randint(80, 180))
Virus.setPosition(randint(80, 180), randint(80, 180))
controller.moveSprite(Nuvem)
forever(function () {
    if (Variavel == 0) {
        animation.runMovementAnimation(
        Virus,
        animation.animationPresets(animation.shake),
        800,
        true
        )
        Arquivo.setVelocity(randint(-20, 20), randint(-20, 20))
        Virus.follow(Nuvem, 55)
    }
})
forever(function () {
    if (Variavel_3 == 0) {
        if (controller.player1.isPressed(ControllerButton.A)) {
            Variavel = 1
            Virus.follow(Nuvem, 18)
            Nuvem.startEffect(effects.spray, 800)
            Virus.startEffect(effects.blizzard, 1500)
            music.setVolume(50)
            music.play(music.createSoundEffect(
            WaveShape.Square,
            1600,
            1,
            255,
            0,
            300,
            SoundExpressionEffect.None,
            InterpolationCurve.Curve
            ), music.PlaybackMode.UntilDone)
            Variavel_3 = 1
            timer.after(1500, function () {
                Variavel_2 = 1
            })
        }
    }
})
forever(function () {
    if (Variavel_2 == 1) {
        Variavel = 0
        timer.after(6000, function () {
            Variavel_3 = 0
            Variavel_2 = 0
        })
    }
})
forever(function () {
    if (info.score() == 100) {
        game.gameOver(true)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    }
})
