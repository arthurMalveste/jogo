def on_on_destroyed(sprite):
    global Arquivo
    Arquivo = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 4 4 4 . . . . . . . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . 5 5 5 8 8 8 8 8 5 5 5 . . 
                    . . . 5 5 8 8 8 8 8 8 8 5 5 . . 
                    . . . 5 5 8 8 5 5 5 8 8 5 5 . . 
                    . . . 5 5 8 8 5 5 5 8 8 5 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.food)
    Arquivo.set_position(randint(80, 210), randint(80, 210))
sprites.on_destroyed(SpriteKind.food, on_on_destroyed)

def on_on_overlap(sprite2, otherSprite):
    sprites.destroy(Nuvem, effects.spray, 300)
    info.change_score_by(0)
    game.game_over(False)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    sprites.destroy(Arquivo, effects.spray, 300)
    info.change_score_by(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

Nuvem: Sprite = None
Arquivo: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
Arquivo = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 4 . . . . . . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 8 8 8 8 8 5 5 5 . . 
            . . . 5 5 8 8 8 8 8 8 8 5 5 . . 
            . . . 5 5 8 8 5 5 5 8 8 5 5 . . 
            . . . 5 5 8 8 5 5 5 8 8 5 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.food)
Virus = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 . 7 7 . 7 7 . . . . 
            . . . . 7 7 . 7 . . . 7 . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.enemy)
Nuvem = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . . . 1 1 1 1 . 1 1 1 1 1 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
Nuvem.set_position(75, 60)
scene.camera_follow_sprite(Nuvem)
info.set_score(0)
Arquivo.set_position(randint(80, 180), randint(80, 180))
Virus.set_position(randint(80, 180), randint(80, 180))
controller.move_sprite(Nuvem)

def on_forever():
    animation.run_movement_animation(Virus,
        animation.animation_presets(animation.shake),
        800,
        True)
    Arquivo.set_velocity(randint(-20, 20), randint(-20, 20))
    Virus.follow(Nuvem, 50)
    if info.score() == 50:
        game.game_over(True)
forever(on_forever)
