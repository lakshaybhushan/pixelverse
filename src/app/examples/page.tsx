// I was lazy to map the images, so I just hard coded them.
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import carImage from "../../../public/images/car.png";
import blImage from "../../../public/images/brielarson.png";
import livingroomImage from "../../../public/images/livingroom.png";
import bulbasaurImage from "../../../public/images/bulbasaur.png";
import luffyImage from "../../../public/images/luffy.png";
import flowerpotImage from "../../../public/images/flowers.png";
import fishImage from "../../../public/images/fish.png";
import femaleportraitImage from "../../../public/images/femaleportrait.png";
import tigerImage from "../../../public/images/tiger.png";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col p-10 md:p-12">
      <section className="flex w-full flex-col items-center justify-between gap-16 p-16 md:items-start md:p-12">
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-x-6 md:left-auto md:justify-normal">
          <Button variant="outline">
            <Link href="/">Home</Link>
          </Button>
          <ModeToggle />
        </div>
        <header className="flex flex-col items-center justify-center gap-1.5 md:items-start md:justify-start">
          <h1 className="text-6xl font-semibold tracking-tight md:text-7xl">
            Examples
          </h1>
          <p className="text-center text-sm md:text-xl">
            Here are some examples of images generated using the PixelVerse.
          </p>
        </header>

        <section className="grid w-[90vw] gap-10 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                A highly photorealistic image of a off road race track, complete
                with precise replicas of the world’s most iconic heavy noun,
                captured at the moment of a sharp turn, with smoke and sparks
                flying from under the wheels and the noun drifting around the
                bend. The image captures the excitement of the moment, with
                happy and noisy fans cheering and waving in the background. (The
                image is depicted at dusk, with the headlights)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={carImage}
                alt="car"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                Brie Larson black and white portrait 8k.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={blImage}
                alt="Brie Larson"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                Photograph by Max Rive, A striking living room interior, sofa
                furniture, a living room table, bookshelves, shelving, a
                fireplace, elegant interior design, perfect layout, consistent
                colors, moody, hazy, cinematic, surreal, highest resolution,
                high detail, intricate, best quality, masterpiece, golden ratio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={livingroomImage}
                alt="Living Room"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                Movie still of Bulbasaur as a gladiator wearing an armor in a
                big crowded roman coliseum, haze air, cinematic coulometry,
                hyperrealism, low saturation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={bulbasaurImage}
                alt="Pokemon"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                One piece luffy in gear 5, Straw hat, fully defined facial
                features of luffy, mouth shut, neon aura, red neon lightnings
                and thunders, clouds tearing apart, ground shattering, ethereal
                portraiture, tonalist, color scheme, pensive stillness, dark
                aquamarine and red, rainy night, ray tracing, high reflection,
                dramatic lighting, intricate details, photo realism.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={luffyImage}
                alt="One Piece"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                Soft pink roses, white Chinese peony, tiny apple blossom
                flowers, eucalyptus leaves, twigs of cranberries, twigs of
                copper pepper berries all arrangement into a cute beautiful
                flowers arrangement on a pink nickel mug. The mug is sitting on
                a thick white book with golden cover image design. Sunny, bright
                image. Ad copy, huge copy space on top of the image, negative
                space, hd, 8k, blurry dreamy background, beautiful pictures.
                Product.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={flowerpotImage}
                alt="A flower pot"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                A painting of a fish on a black background, a digital painting,
                by Jason Benjamin, shutterstock, colorful vector illustration,
                mixed media style illustration, epic full color illustration,
                mascot illustration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={fishImage}
                alt="fish"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                Macro close up , WLOP style, cinematic girl ((textured skin)),
                ((short blonde facial hair)), ((chapped lips)), ,catch lights in
                eyes, , rosacea ,serial killer , facing camera ,dynamic pose,
                focused on eyes, light ,soft lighting, portrait, hyper detailed,
                intricate, extremely beautiful, cinematic lighting, photo
                realistic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={femaleportraitImage}
                alt="Female Portrait"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt :</CardTitle>
              <CardDescription>
                An illustration of a majestic tiger breathing fire, utilizing
                the zoom-out feature of an AI to gradually reveal the full
                composition. Capture the intensity and power of the tiger’s
                fiery breath in a visually captivating manner. Portray the tiger
                with a combination of strength and ferocity, emphasizing its
                piercing gaze, sharp teeth, and powerful stance. Utilize the
                zoom-out feature to gradually reveal the entire illustration.
                Begin with a close-up of the art.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={tigerImage}
                alt="tiger"
                placeholder="blur"
                width={512}
                height={512}
              />
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
};

export default page;
