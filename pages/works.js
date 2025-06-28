import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import hue from '../works/hue_screenshot.png';
import omoro from '../works/minimal_screenshot.png';
import furnituresite from '../works/furnitures_screenshot.png';
import sandsite from '../works/sand_screenshot.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Our Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section>
          <WorkGridItem id="sevaria.co.ke" title="Sevaria" thumbnail={sevaria}>
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section> */}
        
        <Section>
          <WorkGridItem id="https://chungharon.github.io/prelaunch_site/" title="Hue" thumbnail={hue}>
            This fashion webiste for one of our clients coming soon style.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://demo-astro-minimal.netlify.app/" title="MsOmoro" thumbnail={omoro}>
            This is a Airbnb welcome page to guide guests.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="https://tropicalfurnitures.com/" thumbnail={furnituresite} title="Tropical Furnitures">
            A funiture Display website.
          </WorkGridItem>
        </Section>
        {/* https://betterthansand.com/ */}
        <Section delay={0.3}>
          <WorkGridItem id="https://betterthansand.com/" thumbnail={sandsite} title="Better Than Sand">
            A sand bag selling site.
          </WorkGridItem>
        </Section>
        {/* https://tropicalfurnitures.com/ */}
      
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.4}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
