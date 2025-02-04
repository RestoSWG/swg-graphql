import { FieldResolver, Resolver, ResolverInterface, Root } from 'type-graphql';
import { Service } from 'typedi';

import { TangibleObjectService } from '../services/TangibleObjectService';
import { ITangibleObject } from '../types';
import { IServerObject } from '../types/ServerObject';

@Resolver(() => ITangibleObject)
@Service()
export class TangibleObjectResolver implements ResolverInterface<ITangibleObject> {
  constructor(private readonly tangibleObjectService: TangibleObjectService) {
    // Do nothing
  }

  @FieldResolver()
  async ownerId(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.OWNER_ID ?? null;
  }

  @FieldResolver()
  async visible(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.VISIBLE === 'Y';
  }

  @FieldResolver()
  async appearanceData(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.APPEARANCE_DATA ?? null;
  }

  @FieldResolver()
  async interestRadius(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.INTEREST_RADIUS ?? null;
  }

  @FieldResolver()
  async pvpType(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.PVP_TYPE ?? null;
  }

  @FieldResolver()
  async pvpFaction(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.PVP_FACTION ?? null;
  }

  @FieldResolver()
  async damageTaken(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.DAMAGE_TAKEN ?? null;
  }

  @FieldResolver()
  async customAppearance(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.CUSTOM_APPEARANCE ?? null;
  }

  @FieldResolver()
  async count(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.COUNT ?? null;
  }

  @FieldResolver()
  async condition(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.CONDITION ?? null;
  }

  @FieldResolver()
  async creatorId(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.CREATOR_ID ?? null;
  }

  @FieldResolver()
  async sourceDraftSchematicId(@Root() object: IServerObject) {
    const tangible = await this.tangibleObjectService.load(object.id);
    return tangible?.SOURCE_DRAFT_SCHEMATIC ?? null;
  }
}
